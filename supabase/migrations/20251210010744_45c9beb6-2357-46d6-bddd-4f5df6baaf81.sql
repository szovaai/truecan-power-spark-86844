-- Create enum for material categories
CREATE TYPE public.material_category AS ENUM (
  'wiring',
  'panels',
  'lighting',
  'ev_chargers',
  'fixtures',
  'misc'
);

-- Create enum for quote status
CREATE TYPE public.quote_status AS ENUM (
  'draft',
  'sent',
  'accepted',
  'rejected'
);

-- Create materials table
CREATE TABLE public.materials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category material_category NOT NULL DEFAULT 'misc',
  unit_price DECIMAL(10,2) NOT NULL DEFAULT 0,
  unit_type TEXT NOT NULL DEFAULT 'each',
  supplier TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create job templates table
CREATE TABLE public.job_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  default_materials JSONB DEFAULT '[]'::jsonb,
  default_labor_hours DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quotes table
CREATE TABLE public.quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_number TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  customer_phone TEXT,
  job_address TEXT,
  line_items JSONB DEFAULT '[]'::jsonb,
  labor_hours DECIMAL(5,2) DEFAULT 0,
  labor_rate DECIMAL(10,2) DEFAULT 85,
  markup_percentage DECIMAL(5,2) DEFAULT 25,
  notes TEXT,
  subtotal DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) DEFAULT 0,
  status quote_status DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create function to generate quote number
CREATE OR REPLACE FUNCTION public.generate_quote_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.quote_number := 'TCP-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for quote number generation
CREATE TRIGGER set_quote_number
  BEFORE INSERT ON public.quotes
  FOR EACH ROW
  WHEN (NEW.quote_number IS NULL OR NEW.quote_number = '')
  EXECUTE FUNCTION public.generate_quote_number();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_materials_updated_at
  BEFORE UPDATE ON public.materials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_quotes_updated_at
  BEFORE UPDATE ON public.quotes
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable RLS on all tables (but allow all operations since this is internal tool)
ALTER TABLE public.materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Create permissive policies for internal use (no auth required for now)
CREATE POLICY "Allow all operations on materials" ON public.materials FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on job_templates" ON public.job_templates FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on quotes" ON public.quotes FOR ALL USING (true) WITH CHECK (true);

-- Insert default job templates
INSERT INTO public.job_templates (name, description, default_labor_hours, default_materials) VALUES
('Panel Upgrade (100A to 200A)', 'Standard residential panel upgrade from 100 amp to 200 amp service', 8, '[]'),
('EV Charger Installation', 'Level 2 EV charger installation with dedicated circuit', 4, '[]'),
('Pot Light Installation (4-pack)', 'Installation of 4 recessed LED pot lights', 3, '[]'),
('Pot Light Installation (6-pack)', 'Installation of 6 recessed LED pot lights', 4, '[]'),
('Hot Tub/Sauna Wiring', 'Electrical wiring for hot tub or sauna installation', 5, '[]'),
('Emergency Service Call', 'Emergency electrical service and diagnosis', 2, '[]'),
('Renovation Wiring', 'General renovation electrical work - customize as needed', 8, '[]');

-- Insert some sample materials
INSERT INTO public.materials (name, category, unit_price, unit_type, supplier) VALUES
('200A Main Breaker Panel', 'panels', 450.00, 'each', 'Eaton'),
('100A Sub Panel', 'panels', 275.00, 'each', 'Eaton'),
('20A Single Pole Breaker', 'panels', 12.50, 'each', 'Eaton'),
('50A Double Pole Breaker', 'panels', 35.00, 'each', 'Eaton'),
('14/2 NMD90 Wire (150m)', 'wiring', 185.00, 'roll', 'Southwire'),
('12/2 NMD90 Wire (150m)', 'wiring', 225.00, 'roll', 'Southwire'),
('10/3 NMD90 Wire (per meter)', 'wiring', 4.50, 'meter', 'Southwire'),
('6/3 NMD90 Wire (per meter)', 'wiring', 8.75, 'meter', 'Southwire'),
('4" LED Pot Light', 'lighting', 28.00, 'each', 'Luminus'),
('6" LED Pot Light', 'lighting', 35.00, 'each', 'Luminus'),
('LED Dimmer Switch', 'lighting', 45.00, 'each', 'Lutron'),
('Standard Light Switch', 'fixtures', 8.00, 'each', 'Leviton'),
('Decora Outlet', 'fixtures', 6.50, 'each', 'Leviton'),
('GFCI Outlet', 'fixtures', 28.00, 'each', 'Leviton'),
('Level 2 EV Charger (40A)', 'ev_chargers', 650.00, 'each', 'ChargePoint'),
('Level 2 EV Charger (48A)', 'ev_chargers', 850.00, 'each', 'Tesla'),
('50A RV/EV Outlet', 'ev_chargers', 85.00, 'each', 'Leviton'),
('Junction Box (4x4)', 'misc', 3.50, 'each', 'Various'),
('Weatherproof Box', 'misc', 12.00, 'each', 'Various'),
('Electrical Tape (roll)', 'misc', 4.00, 'each', 'Various');
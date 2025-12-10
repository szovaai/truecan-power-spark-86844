-- Create customers table for storing reusable customer data
CREATE TABLE public.customers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- Allow all operations (internal tool)
CREATE POLICY "Allow all operations on customers" ON public.customers
  FOR ALL USING (true) WITH CHECK (true);

-- Add trigger for updated_at
CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON public.customers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add customer_id to quotes table for linking
ALTER TABLE public.quotes ADD COLUMN customer_id UUID REFERENCES public.customers(id);

-- Add index for faster lookups
CREATE INDEX idx_customers_name ON public.customers(name);
CREATE INDEX idx_quotes_customer_id ON public.quotes(customer_id);
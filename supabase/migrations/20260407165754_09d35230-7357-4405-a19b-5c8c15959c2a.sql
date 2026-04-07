
-- Fix customers table: restrict to authenticated users only
DROP POLICY "Allow all operations on customers" ON public.customers;

CREATE POLICY "Authenticated users can manage customers"
  ON public.customers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Fix materials table: public can read, only authenticated can write
DROP POLICY "Allow all operations on materials" ON public.materials;

CREATE POLICY "Anyone can view materials"
  ON public.materials
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage materials"
  ON public.materials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update materials"
  ON public.materials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete materials"
  ON public.materials
  FOR DELETE
  TO authenticated
  USING (true);

-- Fix quotes table: restrict to authenticated users only
DROP POLICY "Allow all operations on quotes" ON public.quotes;

CREATE POLICY "Authenticated users can manage quotes"
  ON public.quotes
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Fix job_templates table: public read, authenticated write
DROP POLICY "Allow all operations on job_templates" ON public.job_templates;

CREATE POLICY "Anyone can view job templates"
  ON public.job_templates
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage job templates"
  ON public.job_templates
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update job templates"
  ON public.job_templates
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete job templates"
  ON public.job_templates
  FOR DELETE
  TO authenticated
  USING (true);

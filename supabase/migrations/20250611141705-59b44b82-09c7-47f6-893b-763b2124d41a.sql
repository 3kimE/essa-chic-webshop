
-- Create admins table to store admin credentials
CREATE TABLE public.admins (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert a default admin user (you can change these credentials later)
INSERT INTO public.admins (username, password) 
VALUES ('admin', 'admin123');

-- Create index for better performance
CREATE INDEX idx_admins_username ON public.admins(username);

-- Add trigger to automatically update updated_at
CREATE TRIGGER update_admins_updated_at 
    BEFORE UPDATE ON public.admins 
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

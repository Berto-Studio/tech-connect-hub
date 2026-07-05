import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface DbProduct {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category_id: string | null;
  badge: string | null;
  stock: number;
  featured: boolean;
  product_categories?: { name: string; slug: string } | null;
}

export interface DbService {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  category_id: string | null;
  featured: boolean;
  service_categories?: { name: string; slug: string } | null;
}

export interface DbCategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  image_url?: string | null;
}

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, product_categories(name, slug)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as DbProduct[];
    },
  });

export const useFeaturedProducts = (limit = 4) =>
  useQuery({
    queryKey: ["products", "featured", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, product_categories(name, slug)")
        .eq("featured", true)
        .limit(limit);
      if (error) throw error;
      return data as DbProduct[];
    },
  });

export const useServices = () =>
  useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*, service_categories(name, slug)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as DbService[];
    },
  });

export const useFeaturedServices = (limit = 6) =>
  useQuery({
    queryKey: ["services", "featured", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*, service_categories(name, slug)")
        .limit(limit);
      if (error) throw error;
      return data as DbService[];
    },
  });

export const useProductCategories = () =>
  useQuery({
    queryKey: ["product_categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("product_categories").select("*").order("name");
      if (error) throw error;
      return data as DbCategory[];
    },
  });

export const useServiceCategories = () =>
  useQuery({
    queryKey: ["service_categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("service_categories").select("*").order("name");
      if (error) throw error;
      return data as DbCategory[];
    },
  });

// -------- Admin mutations --------

export const useUpsertProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (p: Partial<DbProduct> & { name: string; slug: string; price: number }) => {
      const { data, error } = await supabase.from("products").upsert(p as any).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
};

export const useDeleteProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
};

export const useUpsertService = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (s: Partial<DbService> & { title: string; slug: string }) => {
      const { data, error } = await supabase.from("services").upsert(s as any).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["services"] }),
  });
};

export const useDeleteService = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("services").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["services"] }),
  });
};

export const useUpsertProductCategory = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (c: Partial<DbCategory> & { name: string; slug: string }) => {
      const { data, error } = await supabase.from("product_categories").upsert(c as any).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["product_categories"] }),
  });
};

export const useDeleteProductCategory = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("product_categories").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["product_categories"] }),
  });
};

export const useUpsertServiceCategory = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (c: Partial<DbCategory> & { name: string; slug: string }) => {
      const { data, error } = await supabase.from("service_categories").upsert(c as any).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["service_categories"] }),
  });
};

export const useDeleteServiceCategory = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("service_categories").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["service_categories"] }),
  });
};

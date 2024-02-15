import data from "@/app/lib/data/data.json";

export const fetchData = () => {
  return data;
};

export const fetchHeaderData = () => {
  return data.navItems;
};

export const fetchBestSellingProducts = () => {
  return data.products.slice(0, 3);
};

export const fetchFeaturedProducts = () => {
  return data.products.slice(3);
};

export const fetchCollectionData = () => {
  return data.collections;
};

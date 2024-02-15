import TextAndImage, {
  TextAndImageProps,
} from "@/app/ui/sections/TextAndImage";
import CardGrid, { CardGridProps } from "@/app/ui/sections/CardGrid";
import Countdown from "@/app/ui/components/Countdown/Countdown";
import {
  fetchData,
  fetchBestSellingProducts,
  fetchFeaturedProducts,
  fetchCollectionData,
} from "@/app/lib/data/fetchData";

export default function Home() {
  const bestSellingProducts = fetchBestSellingProducts();
  const featuredProducts = fetchFeaturedProducts();
  const collectionData = fetchCollectionData();

  const data = fetchData();
  const heroSectionData = data.sections.hero as TextAndImageProps;
  const bestSellingSectionData = data.sections.bestSelling as Omit<
    CardGridProps,
    "cards"
  >;
  const featuredProductSectionData = data.sections.featuredProducts as Omit<
    CardGridProps,
    "cards"
  >;
  const featuredCollectionsSectionData = data.sections
    .featuredCollections as Omit<CardGridProps, "cards">;
  const exclusiveOfferSectionData = data.sections
    .exclusiveOffer as TextAndImageProps;

  return (
    <main className="text-primary pb-20">
      {heroSectionData && <TextAndImage {...heroSectionData} />}
      {bestSellingSectionData && (
        <CardGrid
          cards={fetchBestSellingProducts()}
          {...bestSellingSectionData}
        />
      )}
      {featuredProductSectionData && (
        <CardGrid
          cards={fetchFeaturedProducts()}
          {...featuredProductSectionData}
        />
      )}
      {exclusiveOfferSectionData && (
        <TextAndImage {...exclusiveOfferSectionData} className="" />
      )}
      {featuredCollectionsSectionData && (
        <CardGrid cards={collectionData} {...featuredCollectionsSectionData} />
      )}
    </main>
  );
}

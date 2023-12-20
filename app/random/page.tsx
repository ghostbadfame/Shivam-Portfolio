import ImageViewer from "@/components/ImageViewer";
import PageTitle from "@/components/PageTitle";
import PageWrapper from "@/components/PageWrapper";

export default function Random() {
  return (
    <PageWrapper className={"grid-cols-4 lg:grid-cols-7 xl:grid-cols-6"}>
      <div className="row-start-3 lg:row-start-2 xl:text-3xl  lg:text-2xl uppercase whitespace-nowrap lg:mt-10 flex flex-col gap-2 lg:gap-4 mt-3">
        <h3 className="font-bold">Favorite Artists</h3>
        <ul>
          <li>the 1975</li>
          <li>tnbhd</li>
          <li>current joys</li>
          <li>justin beiber</li>
        </ul>
      </div>
      <div className="row-start-3 lg:row-start-2 col-start-3 xl:text-3xl lg:text-2xl uppercase whitespace-nowrap lg:mt-10 flex flex-col gap-2 lg:gap-4 mt-3">
        <h3 className="font-bold">Favorite Stories</h3>
        <ul>
          <li>the great gatsby</li>
          <li>tamasha</li>
        </ul>
      </div>

      <div className="row-start-4  xl:text-3xl lg:text-2xl uppercase whitespace-nowrap flex flex-col gap-2 lg:gap-4 mt-3 lg:mt-10">
        <h3 className="font-bold">Favorite Planet</h3>
        <ul>
          <li>pluto</li>
        </ul>
      </div>
      <div className="row-start-4 col-start-3 xl:text-3xl lg:text-2xl uppercase whitespace-nowrap flex flex-col gap-2 lg:gap-4 mt-3 lg:mt-10">
        <h3 className="font-bold">Favorite Song</h3>
        <ul>
          <li>
            <i>A different age</i>
          </li>
        </ul>
      </div>

      <div className="row-start-2 mt-14 lg:row-start-2 lg:mt-10 xl:text-3xl lg:text-2xl uppercase lg:col-start-5 col-span-3 lg:col-span-2 lg:row-span-4 flex flex-col gap-2 lg:gap-6">
        <h3 className="font-bold">Favorite Images</h3>
        <ImageViewer />
      </div>

      <PageTitle classes={"row-start-5 mt-5"}>RANDOM</PageTitle>
    </PageWrapper>
  );
}

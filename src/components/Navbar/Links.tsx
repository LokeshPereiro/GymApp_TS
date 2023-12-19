import { SelectedPage } from "@/utils/pageType";
import AnchorLink from "react-anchor-link-smooth-scroll";

type NavLinksProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
export const Links = ({
  page,
  selectedPage,
  setSelectedPage,
}: NavLinksProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
      transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      Links
    </AnchorLink>
  );
};

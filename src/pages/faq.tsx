import type { GetStaticProps, NextPage } from "next";
import SEO from "@components/seo/page-seo";
import Layout from "@layout/layout-01";
import Breadcrumb from "@components/breadcrumb";
import VideoArea from "@containers/video/layout-05";
import QuoteArea from "@containers/quote/layout-02";
import FaqArea from "@containers/faq/layout-03";
import GalleryArea from "@containers/gallery";
import { normalizedData } from "@utils/methods";
import { ICourse } from "@utils/types";
import { getPageData } from "../lib/page";

interface PageContent {
    section: string;
}

type TProps = {
    data: {
        page: {
            content: PageContent[];
        };
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const Faq: PageProps = ({ data }) => {
    const content = normalizedData<PageContent>(data.page?.content, "section");
    return (
        <>
            <SEO title="FAQ" />
            <Breadcrumb
                pages={[{ path: "/", label: "home" }]}
                currentPage="FAQ"
                showTitle={false}
                className="tw-bg-gray-200"
            />
            <VideoArea data={content?.["video-area"]} />
            <QuoteArea data={content?.["quote-area"]} />
            <FaqArea data={content?.["faq-area"]} />
            <GalleryArea data={content?.["gallery-area"]} />
        </>
    );
};

Faq.Layout = Layout;

export const getStaticProps: GetStaticProps = () => {
    const page = getPageData("inner", "faq");
    return {
        props: {
            data: {
                page,
            },
            layout: {
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default Faq;

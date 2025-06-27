export interface WPYoastHeadJson {
  title: string;
  robots: {
    index: string;
    follow: string;
    "max-snippet": string;
    "max-image-preview": string;
    "max-video-preview": string;
  };
  canonical: string;
  og_locale: string;
  og_type: string;
  og_description: string;
  og_title: string;
  og_url: string;
  og_site_name: string;
  twitter_card: string;
  schema: WPSchema;
  article_modified_time: string;
  article_published_time: string;
  author: string;
  og_image: YoastImage[];
}

interface YoastImage {
  height: number;
  type: string;
  url: string;
  width: number;
}

interface WPSchema {
  "@context": string;
  "@graph": SchemaGraphItem[];
}

interface SchemaGraphItem {
  "@type": string;
  "@id": string;
  url?: string;
  name?: string;
  isPartOf?: {
    "@id": string;
  };
  breadcrumb?: {
    "@id": string;
  };
  inLanguage?: string;
  itemListElement?: ListItem[];
  potentialAction?: PotentialAction[];
  description?: string;
}

interface ListItem {
  "@type": string;
  position: number;
  name: string;
  item?: string;
}

interface PotentialAction {
  "@type": string;
  target: {
    "@type": string;
    urlTemplate: string;
  };
  "query-input": {
    "@type": string;
    valueRequired: boolean;
    valueName: string;
  };
}

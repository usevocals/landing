import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOHeadProps {
  lang: "en" | "es";
}

const BASE_URL = "https://usevocals.com";
const OG_IMAGE = `${BASE_URL}/images/og-image.png`;

export default function SEOHead({ lang }: SEOHeadProps) {
  const { t } = useTranslation();

  const title = t("seo.title");
  const description = t("seo.description");
  const canonicalUrl = `${BASE_URL}/${lang}`;
  const ogLocale = lang === "en" ? "en_US" : "es_ES";
  const ogLocaleAlternate = lang === "en" ? "es_ES" : "en_US";

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en`} />
      <link rel="alternate" hrefLang="es" href={`${BASE_URL}/es`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vocals" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t("seo.og_image_alt")} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlternate} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vocals",
          url: BASE_URL,
          logo: `${BASE_URL}/images/logo.png`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+34-682-78-45-20",
            contactType: "customer support",
            email: "contact@usevocals.com",
            availableLanguage: ["English", "Spanish"],
          },
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Vocals",
          url: BASE_URL,
          inLanguage: lang === "en" ? "en-US" : "es-ES",
        })}
      </script>
    </Helmet>
  );
}

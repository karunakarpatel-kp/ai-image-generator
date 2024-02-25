import React from "react";
import { NextPageWithLayout } from "./_app";
import HeaderSection from "@Components/SEO/Head";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { Box, Grid, Divider, List, ListItem, ListItemText } from "@mui/material";
import MainLayout from "@Components/Layout/MainLayout";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightText";
import Sharing from "@Components/SocialShare/Sharing";

const DisclaimerPage: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.DISCLAIMER_PAGE.title}
        description={SEO_OBJ.DISCLAIMER_PAGE.description!}
        image={SEO_OBJ.DISCLAIMER_PAGE.featuredImage}
        url={SEO_OBJ.DISCLAIMER_PAGE.absoluteURL}
        publishedTime={SEO_OBJ.DISCLAIMER_PAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.DISCLAIMER_PAGE.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.DISCLAIMER_PAGE.title} id="title" />
          <Subtitle text={SEO_OBJ.DISCLAIMER_PAGE.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.DISCLAIMER_PAGE.lastUpdateTime)}
            tags={[]}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.DISCLAIMER_PAGE.featuredImage}
            alt={SEO_OBJ.DISCLAIMER_PAGE.featuredImageAltText}
          />
        </Grid>
        <Grid item md={2} lg={4}>
          {/* Empty Space */}
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Grid
        container
        direction="row"
        spacing={3}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item md={8} lg={8}>
          <Paragraph>
            The information provided on AIImageGenerator.co.in is for general informational purposes only. While we
            strive to provide accurate and up-to-date information, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability, suitability, or availability of the
            information contained on our website or related graphics.
          </Paragraph>
          <HeadingTwo id="accuracy-of-information" title="Accuracy of Information" />
          <Paragraph>
            The content on AIImageGenerator.co.in is based on the authors research, opinions, and personal experiences.
            It may not always reflect the most current news or developments. We do our best to ensure the accuracy of
            the information provided, but we cannot guarantee that all information is entirely accurate, complete, or
            current. Any reliance you place on the information provided on our website is strictly at your own risk.
          </Paragraph>

          <HeadingTwo id="editorial-control" title="Editorial Control" />
          <Paragraph>
            <B>AIImageGenerator.co.in</B> is a news blog where our team of writers and editors curate and publish
            articles on various topics. The opinions expressed in the articles belong to the respective authors and do
            not necessarily reflect the views of AIImageGenerator.co.in. We strive to maintain editorial integrity and
            provide a platform for diverse perspectives.
          </Paragraph>
          <HeadingTwo id="external-links" title="External Links" />
          <Paragraph>
            <B>AIImageGenerator.co.in</B> may contain links to external websites or resources. These links are provided
            for convenience and informational purposes. We have no control over the content, nature, or availability of
            those external sites. The inclusion of any links does not necessarily imply a recommendation or endorsement
            of the views expressed within them.
          </Paragraph>

          <HeadingTwo id="advertisement" title="Advertisement and Sponsored Content" />
          <Paragraph>
            <B>AIImageGenerator.co.in</B> may display advertisements or sponsored content. The presence of such content
            does not constitute an endorsement or recommendation AIImageGenerator.co.in. We are not responsible for the
            accuracy, legality, or content of any external advertisements or sponsored materials.
          </Paragraph>
          <HeadingTwo id="advice" title="Always Seek Professional Advice" />
          <Paragraph>
            The information provided on <B>AIImageGenerator.co.in</B> is not intended to be a substitute for
            professional advice. It is essential to seek the advice of qualified professionals regarding any specific
            issue or concern. Reliance on any information provided on this website is solely at your own risk.
          </Paragraph>
          <HeadingTwo id="limitation" title="Limitation of Liability" />
          <Paragraph>
            In no event shall <B>AIImageGenerator.co.in</B> or its owners, employees, or affiliates be liable for any
            direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use
            of our website, the information provided, or the inability to use the website.
          </Paragraph>
          <HeadingTwo id="disclaimer" title="Changes to the Disclaimer" />
          <Paragraph>
            We reserve the right to modify or update this Disclaimer at any time without prior notice. By using
            AIImageGenerator.co.in, you agree to be bound by the current version of the Disclaimer.
          </Paragraph>
          <HeadingTwo id="contact" title="Contact Us" />
          <Paragraph>
            If you have any questions or concerns regarding this Disclaimer or our website, please contact us at:
          </Paragraph>
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Email</B>: <B>karunakarpatel.business@gmail.com</B>.{" "}
                </Paragraph>
              </ListItemText>
            </ListItem>
          </List>
          <Box mb={3}>
            <Sharing />
          </Box>
        </Grid>

        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          {/* Right Extra Space */}
        </Grid>
      </Grid>
    </>
  );
};

export default DisclaimerPage;
DisclaimerPage.getLayout = function getLayout(page: ReactJSXElement) {
  return <MainLayout>{page}</MainLayout>;
};

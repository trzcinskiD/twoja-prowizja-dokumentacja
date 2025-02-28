import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "trzcinskiD/twoja-prowizja-dokumentacja",
        // from data-repo-id
        repoId: "R_kgDOOA-Lbw",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDOOA-Lb84CnbdC",
      },
    }),
  ],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    //Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [
    Component.Graph({
      globalGraph: {
        fontSize: 0.1,
      },
      localGraph: {
        fontSize: 0.1,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    //Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [],
}

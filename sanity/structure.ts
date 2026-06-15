export const structure = (S: any) =>
  S.list()
    .title("Nội dung")
    .items(
      S.documentTypeListItems().filter(
        (item: any) =>
          !["blockContent"].includes(item.getId())
      )
    )
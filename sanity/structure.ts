export const structure = (S: any) =>
  S.list()
    .title("Nội dung")
    .items([
      S.documentTypeListItem("product").title("Sản phẩm"),
    ])
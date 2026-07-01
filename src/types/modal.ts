export interface ModalPageProps {
  title: string;
  description: string[];
  image?: string;
  url?: string;
  participation?: string;
}

export interface KsiSiteProps {
  title: string;
  image: string;
  url: string;
  description?: string[]; // 있는 항목만 넣고 없으면 생략
}

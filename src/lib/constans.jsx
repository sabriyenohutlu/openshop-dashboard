import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineCog,
  HiOutlineUserGroup,
  HiOutlineUserCircle,
  HiOutlineSpeakerphone,
  HiOutlineCollection,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    id: 1,
    key: "anasayfa",
    label: "Anasayfa",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    id: 2,
    key: "urunler",
    label: "Ürünler",
    path: "/urunler",
    icon: <HiOutlineCube />,
  },
  {
    id: 3,
    key: "urun-ekle",
    label: "Ürün Ekle",
    path: "/urun-ekle",
    icon: <HiOutlineShoppingCart />,
    nested: true,
    nesteds: [
      {
        label: "Tek Ürün Ekle",
		key:"tek-urun-ekle",
        path: "urun-ekle/tek-urun-ekle",
        icon: <HiOutlineShoppingCart />,
      },
      {
        label: "Çoklu Ürün Ekle",
		key:"cok-urun-ekle",
        path: "urun-ekle/cok-urun-ekle",
        icon: <HiOutlineShoppingCart />,
      },
    ],
  },
  {
    id: 4,
    key: "kampanlar",
    label: "Kampanyalar",
    path: "/kampanyalar",
    icon: <HiOutlineSpeakerphone />,
  },
  {
    id: 5,
    key: "kategoriler",
    label: "Kategoriler",
    path: "/kategoriler",
    icon: <HiOutlineCollection />,
  },
  {
    id: 6,
    key: "müsteriler",
    label: "Müşteriler",
    path: "/musteriler",
    icon: <HiOutlineUserGroup />,
  },
  {
    id: 7,
    key: "siparisler",
    label: "Siparişler",
    path: "/siparisler",
    icon: <HiOutlineDocumentText />,
  },
  {
    id: 8,
    key: "kullancilar",
    label: "Kullanıcılar",
    path: "/kullanicilar",
    icon: <HiOutlineUsers />,
  },
  {
    id: 9,
    key: "mesajlar",
    label: "Mesajlar",
    path: "/mesajlar",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "ayarlar",
    label: "Ayarlar",
    path: "/ayarlar",
    icon: <HiOutlineCog />,
  },
  {
    key: "profil",
    label: "Profilim",
    path: "/profilim",
    icon: <HiOutlineUserCircle />,
  },
];

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
	HiOutlineCollection 
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'anasayfa',
		label: 'Anasayfa',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'urunler',
		label: 'Ürünler',
		path: '/urunler',
		icon: <HiOutlineCube />
	},
	{
		key: 'urun-ekle',
		label: 'Ürün Ekle',
		path: '/urun-ekle',
		icon: <HiOutlineShoppingCart />
	},
	{
		key:"kampanlar",
		label:"Kampanyalar",
		path:"/kampanyalar",
		icon: <HiOutlineSpeakerphone/>
	},
	{
		key:"kategoriler",
		label:"Kategoriler",
		path:"/kategoriler",
		icon: <HiOutlineCollection />
		
	},
	{
		key: 'müsteriler',
		label: 'Müşteriler',
		path: '/musteriler',
		icon: <HiOutlineUserGroup />
	},
	{
		key: 'siparisler',
		label: 'Siparişler',
		path: '/siparisler',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'kullancilar',
		label: 'Kullanıcılar',
		path: '/kullanicilar',
		icon: <HiOutlineUsers />
	},
	{
		key: 'mesajlar',
		label: 'Mesajlar',
		path: '/mesajlar',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'ayarlar',
		label: 'Ayarlar',
		path: '/ayarlar',
		icon: <HiOutlineCog />
	},
	{
		key: 'profil',
		label: 'Profilim',
		path: '/profilim',
		icon: <HiOutlineUserCircle />
	},
]
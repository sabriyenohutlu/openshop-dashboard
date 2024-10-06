//import {DASHBOARD_SIDEBAR_BOTTOM_LINKS,DASHBOARD_SIDEBAR_LINKS,} from "../../lib/constans";
//import SidebarLink from "./SidebarLink";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import AnimateHeight from "react-animate-height";

const Sidebar = () => {
  const mode = useSelector((state) => state.theme.mode);
  const [currentMenu, setCurrentMenu] = useState("");

  const toggleMenu = (value) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  return (
    <div>
      <nav
        className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${
          mode ? "text-white-dark" : ""
        }`}
      >
        <ul className="relative font-semibold space-y-0.5 p-4 py-0 ">
          <li className="menu nav-item">
            {/* <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                                  <div className="flex items-center">
                                      <svg className="group-hover:!text-primary shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              opacity="0.5"
                                              d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                                              fill="currentColor"
                                          />
                                          <path
                                              d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                                              fill="currentColor"
                                          />
                                      </svg>
                                      <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('dashboard')}</span>
                                  </div>

                                  <div className={currentMenu === 'dashboard' ? 'rotate-90' : 'rtl:rotate-180'}>
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                  </div>
                              </button> */}

            {/* <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                                  <ul className="sub-menu text-gray-500">
                                      <li>
                                          <NavLink to="/">{t('sales')}</NavLink>
                                      </li>
                                      <li>
                                          <NavLink to="/analytics">{t('analytics')}</NavLink>
                                      </li>
                                      <li>
                                          <NavLink to="/finance">{t('finance')}</NavLink>
                                      </li>
                                      <li>
                                          <NavLink to="/crypto">{t('crypto')}</NavLink>
                                      </li>
                                  </ul>
                              </AnimateHeight> */}
          </li>
          <li className="nav-item">
            <ul>
              <li className="nav-item">
                <NavLink to="/" className="group">
                  <div className="flex items-center">
                    <svg
                      className="group-hover:!text-primary shrink-0"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M19.7165 20.3624C21.143 19.5846 22 18.5873 22 17.5C22 16.3475 21.0372 15.2961 19.4537 14.5C17.6226 13.5794 14.9617 13 12 13C9.03833 13 6.37738 13.5794 4.54631 14.5C2.96285 15.2961 2 16.3475 2 17.5C2 18.6525 2.96285 19.7039 4.54631 20.5C6.37738 21.4206 9.03833 22 12 22C15.1066 22 17.8823 21.3625 19.7165 20.3624Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      Genel Bakış
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* <li className="nav-item">
                              <ul>
                                  <li className="nav-item">
                                      <NavLink to="/kisiler" className="group">
                                          <div className="flex items-center">
                                              <svg className="group-hover:!text-primary shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path
                                                      opacity="0.5"
                                                      d="M19.7165 20.3624C21.143 19.5846 22 18.5873 22 17.5C22 16.3475 21.0372 15.2961 19.4537 14.5C17.6226 13.5794 14.9617 13 12 13C9.03833 13 6.37738 13.5794 4.54631 14.5C2.96285 15.2961 2 16.3475 2 17.5C2 18.6525 2.96285 19.7039 4.54631 20.5C6.37738 21.4206 9.03833 22 12 22C15.1066 22 17.8823 21.3625 19.7165 20.3624Z"
                                                      fill="currentColor"
                                                  />
                                                  <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                                                      fill="currentColor"
                                                  />
                                              </svg>
                                              <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Kişiler</span>
                                          </div>
                                      </NavLink>
                                  </li>
                              </ul>
                          </li> */}
          <li className="menu nav-item">
            <button
              type="button"
              className={`${
                currentMenu === "offers" ? "active" : ""
              } nav-link group w-full`}
              onClick={() => toggleMenu("offers")}
            >
              <NavLink to="/teklifler" className="flex items-center">
                <IoIosMenu className="group-hover:!text-primary shrink-0" />
                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                  Teklifler
                </span>
              </NavLink>

              <div
                className={
                  currentMenu !== "offers" ? "rtl:rotate-90 -rotate-90" : ""
                }
              >
                <FaCaretDown />
              </div>
            </button>
            <AnimateHeight
              duration={300}
              height={currentMenu === "offers" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/teklifler">Teklifler Listesi</NavLink>
                </li>
              </ul>
            </AnimateHeight>
            <AnimateHeight
              duration={300}
              height={currentMenu === "offers" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/teklifler/teklif-ekle">
                    Yeni Teklif Ekle
                  </NavLink>
                </li>
              </ul>
            </AnimateHeight>
          </li>
          <li className="menu nav-item">
            <button
              type="button"
              className={`${
                currentMenu === "companies" ? "active" : ""
              } nav-link group w-full`}
              onClick={() => toggleMenu("companies")}
            >
              <NavLink to="/firmalar" className="flex items-center">
                <IoIosMenu className="group-hover:!text-primary shrink-0" />
                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                  Firma / Müşteri (CRM)
                </span>
              </NavLink>

              <div
                className={
                  currentMenu !== "companies" ? "rtl:rotate-90 -rotate-90" : ""
                }
              >
                <FaCaretDown />
              </div>
            </button>
            <AnimateHeight
              duration={300}
              height={currentMenu === "companies" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/firmalar">Firma / Müşteri Listesi</NavLink>
                </li>
              </ul>
            </AnimateHeight>
            <AnimateHeight
              duration={300}
              height={currentMenu === "companies" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/firmalar/firma-ekle">
                    Firma / Müşteri Ekle
                  </NavLink>
                </li>
              </ul>
            </AnimateHeight>
          </li>
          <li className="menu nav-item">
            <button
              type="button"
              className={`${
                currentMenu === "product" ? "active" : ""
              } nav-link group w-full`}
              onClick={() => toggleMenu("product")}
            >
              <NavLink to="/urunler" className="flex items-center">
                <IoIosMenu className="group-hover:!text-primary shrink-0" />
                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                  Ürünler
                </span>
              </NavLink>

              <div
                className={
                  currentMenu !== "product" ? "rtl:rotate-90 -rotate-90" : ""
                }
              >
                <FaCaretDown />
              </div>
            </button>
            <AnimateHeight
              duration={300}
              height={currentMenu === "product" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/urunler">Tüm Ürünler</NavLink>
                </li>
              </ul>
            </AnimateHeight>
            <AnimateHeight
              duration={300}
              height={currentMenu === "product" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/urunler/urun-ekle">Ürün Ekle</NavLink>
                </li>
              </ul>
            </AnimateHeight>
          </li>
          <li className="menu nav-item">
            <button
              type="button"
              className={`${
                currentMenu === "calisanlar" ? "active" : ""
              } nav-link group w-full`}
              onClick={() => toggleMenu("calisanlar")}
            >
              <NavLink to="/calisanlar" className="flex items-center">
                <IoIosMenu className="group-hover:!text-primary shrink-0" />
                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                  Çalışanlar
                </span>
              </NavLink>

              <div
                className={
                  currentMenu !== "calisanlar" ? "rtl:rotate-90 -rotate-90" : ""
                }
              >
                <FaCaretDown />
              </div>
            </button>
            <AnimateHeight
              duration={300}
              height={currentMenu === "calisanlar" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/calisanlar">Tüm Çalışanlar</NavLink>
                </li>
              </ul>
            </AnimateHeight>
            <AnimateHeight
              duration={300}
              height={currentMenu === "calisanlar" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/calisanlar/calisan-ekle">Çalışan Ekle</NavLink>
                </li>
              </ul>
            </AnimateHeight>
          </li>
          <li className="menu nav-item">
            <button
              type="button"
              className={`${
                currentMenu === "settings" ? "active" : ""
              } nav-link group w-full`}
              onClick={() => toggleMenu("settings")}
            >
              <NavLink to="/ayarlar" className="flex items-center">
                <IoIosMenu className="group-hover:!text-primary shrink-0" />
                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                  Ayarlar
                </span>
              </NavLink>

              <div
                className={
                  currentMenu !== "offers" ? "rtl:rotate-90 -rotate-90" : ""
                }
              >
                <FaCaretDown />
              </div>
            </button>

            <AnimateHeight
              duration={300}
              height={currentMenu === "settings" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <NavLink to="/ayarlar/firma-bilgileri">
                    Firma Bilgileri
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ayarlar/kategori-yonetimi">
                    Kategori ve Etiketler
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ayarlar/kullanici-yonetimi">
                    Kullanıcı Yönetimi
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ayarlar/profil-yonetimi">
                    Profil Yönetimi
                  </NavLink>
                </li>
              </ul>
            </AnimateHeight>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

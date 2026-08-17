import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Wine, Beef, Soup, IceCream, Salad, Leaf } from "lucide-react";

import ardeiUmpluti from "../assets/images/menu_dishes/ardei_umpluti.jpg";
import salataCezar from "../assets/images/menu_dishes/salata_cezar.jpg";
import salataSuba from "../assets/images/menu_dishes/salata_suba.jpg";
import castravetiMurati from "../assets/images/menu_dishes/castraveti_murati.jpg";
import costitaPorc from "../assets/images/menu_dishes/costita_porc.jpg";
import fripturaPorcZacusca from "../assets/images/menu_dishes/friptura_porc_zacusca.jpg";
import filePesteMamaliga from "../assets/images/menu_dishes/file_peste_mamaliga.jpg";
import miciPlatou from "../assets/images/menu_dishes/mici_platou.jpg";
import platouCarne from "../assets/images/menu_dishes/platou_carne.jpg";
import filePesteCartofi from "../assets/images/menu_dishes/file_peste_cartofi.jpg";
import fripturaPuiCiuperci from "../assets/images/menu_dishes/friptura_pui_ciuperci.jpg";
import carneFrantuzescPiure from "../assets/images/menu_dishes/carne_frantuzesc_piure.jpg";
import coltunasiPui from "../assets/images/menu_dishes/coltunasi_pui.jpg";
import tocanitaCiuperci from "../assets/images/menu_dishes/tocanita_ciuperci.jpg";
import ciuperciSmantana from "../assets/images/menu_dishes/ciuperci_smantana.jpg";
import borsUcrainesc from "../assets/images/menu_dishes/bors_ucrainesc.jpg";
import derunaCarne from "../assets/images/menu_dishes/deruna_carne.jpg";
import vinRosu from "../assets/images/menu_dishes/vin_rosu.jpg";
import sampanie from "../assets/images/menu_dishes/sampanie.jpg";
import capucino from "../assets/images/menu_dishes/capucino.jpg";
import clatiteBranza from "../assets/images/menu_dishes/clatite_branza.jpg";
import cheesecake from "../assets/images/menu_dishes/cheesecake.jpg";

const IMAGINI_PREPARATE = {
  1: ardeiUmpluti,
  2: salataCezar,
  3: salataSuba,
  4: castravetiMurati,
  5: costitaPorc,
  6: fripturaPorcZacusca,
  7: filePesteMamaliga,
  8: miciPlatou,
  9: platouCarne,
  10: filePesteCartofi,
  11: fripturaPuiCiuperci,
  12: carneFrantuzescPiure,
  13: coltunasiPui,
  14: tocanitaCiuperci,
  15: ciuperciSmantana,
  16: borsUcrainesc,
  17: derunaCarne,
  18: vinRosu,
  20: sampanie,
  21: capucino,
  26: clatiteBranza,
  27: cheesecake,
};

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
`;

const CATEGORII_META = [
  { id: "toate", icon: Leaf },
  { id: "aperitive", icon: Salad },
  { id: "principale", icon: Beef },
  { id: "garnituri", icon: Soup },
  { id: "bauturi", icon: Wine },
  { id: "deserturi", icon: IceCream },
];

const MENIU_META = [
  // Aperitive
  { id: 1, categorie: "aperitive", pret: 5 },
  { id: 2, categorie: "aperitive", pret: 13 },
  { id: 3, categorie: "aperitive", pret: 12 },
  { id: 4, categorie: "aperitive", pret: 10 },

  // Feluri principale
  { id: 5, categorie: "principale", pret: 32 },
  { id: 6, categorie: "principale", pret: 32 },
  { id: 7, categorie: "principale", pret: 20 },
  { id: 8, categorie: "principale", pret: 15 },
  { id: 9, categorie: "principale", pret: 14 },
  { id: 10, categorie: "principale", pret: 12 },
  { id: 11, categorie: "principale", pret: 12 },
  { id: 12, categorie: "principale", pret: 12 },
  { id: 13, categorie: "principale", pret: 12 },

  // Garnituri & ciorbe
  { id: 14, categorie: "garnituri", pret: 10 },
  { id: 15, categorie: "garnituri", pret: 10 },
  { id: 16, categorie: "garnituri", pret: 12 },
  { id: 17, categorie: "garnituri", pret: 7.5 },

  // Băuturi
  { id: 18, categorie: "bauturi", pret: 10 },
  { id: 19, categorie: "bauturi", pret: 10 },
  { id: 20, categorie: "bauturi", pret: 7.5 },
  { id: 21, categorie: "bauturi", pret: 10 },
  { id: 22, categorie: "bauturi", pret: 6 },
  { id: 23, categorie: "bauturi", pret: 6.5 },
  { id: 24, categorie: "bauturi", pret: 4 },
  { id: 25, categorie: "bauturi", pret: 6 },

  // Deserturi
  { id: 26, categorie: "deserturi", pret: 12 },
  { id: 27, categorie: "deserturi", pret: 4.2 },
  { id: 28, categorie: "deserturi", pret: 6.7 },
];

const LOCALE_TAGS = { ro: "ro-RO", uk: "uk-UA", nl: "nl-BE" };

function formatPret(p, lang) {
  const tag = LOCALE_TAGS[lang] || "ro-RO";
  return (
    p.toLocaleString(tag, { minimumFractionDigits: p % 1 === 0 ? 0 : 2 }) +
    " €"
  );
}

export default function MeniuRestaurant() {
  const { t, i18n } = useTranslation("menu");
  const [activ, setActiv] = useState("toate");

  const itemiFiltrati = useMemo(
    () =>
      activ === "toate"
        ? MENIU_META
        : MENIU_META.filter((i) => i.categorie === activ),
    [activ],
  );

  return (
    <div
      style={{
        background: "#12201A",
        minHeight: "100%",
        fontFamily: "'Inter', sans-serif",
        color: "#F3EFE3",
        padding: "40px 20px",
      }}
    >
      <style>{FONTS}</style>

      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.3em",
              fontSize: 11,
              color: "#9CB0A2",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            {t("title")}
          </div>
          {/* <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 44px)",
              margin: 0,
              color: "#F3EFE3",
            }}
          >
            {t("heading")}
          </h1> */}
          <div
            style={{
              width: 48,
              height: 2,
              background: "#C9A227",
              margin: "16px auto 0",
              borderRadius: 2,
            }}
          />
        </div>

        {/* Filtre categorii */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          {CATEGORII_META.map((cat) => {
            const Icon = cat.icon;
            const esteActiv = activ === cat.id;
            const esteBauturi = cat.id === "bauturi";
            return (
              <button
                key={cat.id}
                onClick={() => setActiv(cat.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 16px",
                  borderRadius: 999,
                  border: esteActiv
                    ? "1px solid transparent"
                    : "1px solid rgba(243,239,227,0.18)",
                  background: esteActiv
                    ? esteBauturi
                      ? "#7A2E2E"
                      : "#C9A227"
                    : "transparent",
                  color: esteActiv
                    ? esteBauturi
                      ? "#F3EFE3"
                      : "#12201A"
                    : "#DCE4DB",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
              >
                <Icon size={15} strokeWidth={2} />
                {t(`categories.${cat.id}`)}
              </button>
            );
          })}
        </div>

        {/* Listă preparate */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {itemiFiltrati.map((item, idx) => {
            const imagine = IMAGINI_PREPARATE[item.id];
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 4px",
                  borderBottom:
                    idx !== itemiFiltrati.length - 1
                      ? "1px solid rgba(243,239,227,0.08)"
                      : "none",
                }}
              >
                {imagine && (
                  <img
                    src={imagine}
                    alt={t(`items.${item.id}`)}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 10,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                )}
                <span
                  style={{
                    flexGrow: 1,
                    fontFamily: "'Fraunces', serif",
                    fontSize: 17,
                    fontWeight: 400,
                    color: "#F3EFE3",
                    lineHeight: 1.4,
                  }}
                >
                  {t(`items.${item.id}`)}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#C9A227",
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatPret(item.pret, i18n.language)}
                </span>
              </div>
            );
          })}

          {itemiFiltrati.length === 0 && (
            <div
              style={{
                textAlign: "center",
                color: "#9CB0A2",
                padding: "40px 0",
              }}
            >
              {t("emptyState")}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: 12.5,
            color: "#6E8577",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          📍 Kruiskouter 4, 1730 Asse, Bruxelles &nbsp;·&nbsp; 📞 +32 486 277
          791
        </div>
      </div>
    </div>
  );
}

import { Product } from '../types';

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  tag: string;
}

export const getProductGallery = (product: Product, finish = 'Silver'): GalleryItem[] => {
  // Specific handler for GPF-40 with dedicated Silver, Black, and Application images
  if (product.code === 'GPF-40' || product.id === 'gpf-40') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997542/GPF-40_B_qt5m9e.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997542/GPF-40_S_f8mxdl.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997546/GPF-40_A_kfkl6a.webp';

    return [
      {
        id: `gpf-40-${finish.toLowerCase()}-studio`,
        url: variantImg,
        caption: `${finish} Finish Specification (Big L)`,
        tag: finish,
      },
      {
        id: 'gpf-40-application',
        url: applicationImg,
        caption: 'Over-Panel & Side-Panel Glass Door Assembly',
        tag: 'Application',
      },
      {
        id: `gpf-40-${finish.toLowerCase()}-detail`,
        url: variantImg,
        caption: isBlack
          ? 'Matte Black Coated SS 304 Cover Plate & Integrated Pivot'
          : 'Satin Stainless Steel SS 304 Cover Plate & Integrated Pivot',
        tag: 'Detail',
      },
    ];
  }

  // Specific handler for GPF-50 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GPF-50' || product.id === 'gpf-50') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997776/GPF-50_B_x2g8de.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997777/GPF-50_S_xj1e1t.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997776/GPF-50_A_wzs4kt.webp';

    return [
      {
        id: `gpf-50-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Wall Mounted Over Panel Patch with Pivot)`,
        tag: finish,
      },
      {
        id: 'gpf-50-application',
        url: applicationImg,
        caption: 'Wall-Mounted Over-Panel Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GPF-610 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GPF-610' || product.id === 'gpf-610') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998079/GPF-610_B_haa2f4.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998081/GPF-610_S_miiaqd.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998080/GPF-610_A_tiu31l.webp';

    return [
      {
        id: `gpf-610-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Over Panel Side Panel Patch Connector — Small L)`,
        tag: finish,
      },
      {
        id: 'gpf-610-application',
        url: applicationImg,
        caption: 'Over-Panel & Side-Panel Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GPF-650 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GPF-650' || product.id === 'gpf-650') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997935/GPF-650_B_b5jjrv.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997936/GPF-650_S_eoz6gd.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997936/GPF-650_A_phsgl4.webp';

    return [
      {
        id: `gpf-650-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Glass to Glass Connecting Patch with Wall/Ceiling)`,
        tag: finish,
      },
      {
        id: 'gpf-650-application',
        url: applicationImg,
        caption: 'Wall/Ceiling Glass Connection Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GPF-620 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GPF-620' || product.id === 'gpf-620') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998256/GPF-620_B_oh0wam.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998257/GPF-620_S_ovcmz6.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998255/GPF-620_A_vgf8jn.webp';

    return [
      {
        id: `gpf-620-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Quadruple Patch)`,
        tag: finish,
      },
      {
        id: 'gpf-620-application',
        url: applicationImg,
        caption: 'Multi-Panel Glazing System Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GFS-MFH with dedicated Silver, Black, and shared Application image
  if (product.code === 'GFS-MFH' || product.id === 'gfs-mfh') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998386/GFS-MFH_a_p1psoz.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998386/GFS-MFH_a_p1psoz.webp';

    return [
      {
        id: `gfs-mfh-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Mini Floor Hinge)`,
        tag: finish,
      },
      {
        id: 'gfs-mfh-application',
        url: applicationImg,
        caption: 'Floor Installation Context Beneath Glass Door',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGC-01A with dedicated Silver, Black, and shared Application image
  if (product.code === 'GGC-01A' || product.id === 'ggc-01a') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790010776/GGC-01A_B_etmh0n.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790010808/GGC-01A_S_qll6ek.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790010758/GGC-01A_A_zevyom.webp';

    return [
      {
        id: `ggc-01a-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (U Connector Single Hole)`,
        tag: finish,
      },
      {
        id: 'ggc-01a-application',
        url: applicationImg,
        caption: 'Glass Connector Architectural Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGC-01 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GGC-01' || product.id === 'ggc-01') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790143834/GGC-01_B_bww96b.jpg'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790143835/GGC-01_S_gdj9in.jpg';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790143834/GGC-01_A_uix5dm.jpg';

    return [
      {
        id: `ggc-01-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (U Connector)`,
        tag: finish,
      },
      {
        id: 'ggc-01-application',
        url: applicationImg,
        caption: 'U Connector Architectural Glazing Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGC-02 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GGC-02' || product.id === 'ggc-02') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144188/GGC-02_B_ohgyte.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144188/GGC-02_S_qanwh7.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144188/GGC-02_A_ncfgfz.webp';

    return [
      {
        id: `ggc-02-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Glass to Glass 135° Connector)`,
        tag: finish,
      },
      {
        id: 'ggc-02-application',
        url: applicationImg,
        caption: '135° Glass Connection Architectural Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGC-03 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GGC-03' || product.id === 'ggc-03') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144445/GGC-03_B_suo0v3.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144446/GGC-03_S_jaivlc.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144445/GGC-03_A_vyeyik.webp';

    return [
      {
        id: `ggc-03-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Glass to Glass 90° Connector)`,
        tag: finish,
      },
      {
        id: 'ggc-03-application',
        url: applicationImg,
        caption: '90° Perpendicular Glass Partition Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGC-04 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GGC-04' || product.id === 'ggc-04') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145255/04_B_b6u4a7.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145255/O4_S_x06bxb.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145254/04A_o9s3ph.webp';

    return [
      {
        id: `ggc-04-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (L Connector)`,
        tag: finish,
      },
      {
        id: 'ggc-04-application',
        url: applicationImg,
        caption: 'L Connector Architectural Glazing Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGC-05 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GGC-05' || product.id === 'ggc-05') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145678/GGC-05_B_bzzkmh.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145677/GGC-05_S_qws80t.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145677/GGC-05_A_fa3foz.webp';

    return [
      {
        id: `ggc-05-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Glass to Glass 180° Connector)`,
        tag: finish,
      },
      {
        id: 'ggc-05-application',
        url: applicationImg,
        caption: '180° Aligned Glass Partition Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGC-06 with dedicated Silver, Black, and shared Application image
  if (product.code === 'GGC-06' || product.id === 'ggc-06') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790148863/GGC-06_b_onlu41.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790148863/GGC-06_s_kuyphb.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790148883/GGC-06_etmu42.webp';

    return [
      {
        id: `ggc-06-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (T-Connector Glass to Glass 90°)`,
        tag: finish,
      },
      {
        id: 'ggc-06-application',
        url: applicationImg,
        caption: '90° T-Configuration 3-Glass Panel Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GSH-11 H/P with dedicated Silver, Black, and shared Application image
  if (
    product.code === 'GSH-11 H/P' ||
    product.id === 'gsh-11-hp' ||
    product.code === 'GSH-11-HP'
  ) {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157711/GSH-11_H_P_B_imbwgi.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157711/GSH-11_HP_S_aobour.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157712/GSH-11_HP_ofzi7w.webp';

    return [
      {
        id: `gsh-11-hp-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Wall-to-Glass 90° Offset Hinge)`,
        tag: finish,
      },
      {
        id: 'gsh-11-hp-application',
        url: applicationImg,
        caption: '90° Wall-to-Glass Offset Hinge Architectural Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GSH-11 Wall-to-Glass 90° Hinge
  if (product.code === 'GSH-11' || product.id === 'gsh-11') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157941/GSH_11_B_wimawd.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157960/GSH_11_irrmax.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157961/GSH_11_A_pz1owd.webp';

    return [
      {
        id: `gsh-11-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Wall-to-Glass 90° Hinge)`,
        tag: finish,
      },
      {
        id: 'gsh-11-application',
        url: applicationImg,
        caption: '90° Wall-to-Glass Hinge Architectural Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GSH-22 Glass-to-Glass 180° Hinge
  if (product.code === 'GSH-22' || product.id === 'gsh-22') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790158355/GSH-22_B_nhhraw.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790158354/GSH-22_S_gtshsm.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790158357/GSH-22_yh0dbs.webp';

    return [
      {
        id: `gsh-22-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Glass-to-Glass 180° Hinge)`,
        tag: finish,
      },
      {
        id: 'gsh-22-application',
        url: applicationImg,
        caption: '180° Glass-to-Glass Hinge Architectural Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GSH-33 Glass-to-Glass 135° Hinge
  if (product.code === 'GSH-33' || product.id === 'gsh-33') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790159032/GSH-33_B_mw8vxv.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790159035/GSH-33_S_cdeca5.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790159032/GSH-33_A_vh6zpt.webp';

    return [
      {
        id: `gsh-33-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Glass-to-Glass 135° Hinge)`,
        tag: finish,
      },
      {
        id: 'gsh-33-application',
        url: applicationImg,
        caption: '135° Neo-Angle Glass Hinge Architectural Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GSH-55 Wall-to-Glass 90° Fix Bracket
  if (product.code === 'GSH-55' || product.id === 'gsh-55') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229234/GSH-55_b_kilacr.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229263/GSH-55_s_lj1ksl.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229507/GSH-55_a_ic0qcv_ztsxll.webp';

    return [
      {
        id: `gsh-55-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Wall-to-Glass 90° Fix Bracket)`,
        tag: finish,
      },
      {
        id: 'gsh-55-application',
        url: applicationImg,
        caption: '90° Wall-to-Glass Fix Bracket Architectural Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GSH-44 Glass to Glass 90° Hinge
  if (product.code === 'GSH-44' || product.id === 'gsh-44') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229616/GSH_44_B_gvpdkt.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229617/GSH_44_may6ep.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229615/GSH_44_A_n0wjdg.webp';

    return [
      {
        id: `gsh-44-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Glass to Glass 90° Hinge)`,
        tag: finish,
      },
      {
        id: 'gsh-44-application',
        url: applicationImg,
        caption: '90° Glass-to-Glass Perpendicular Enclosure Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GSH-66 Double Glass Hinge Joint for 2 Glass (T Hinge)
  if (product.code === 'GSH-66' || product.id === 'gsh-66') {
    const isBlack = finish.toLowerCase().includes('black');
    const isRose = finish.toLowerCase().includes('rose');
    const isGold = finish.toLowerCase().includes('gold') && !isRose;

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229910/GSH-66_B_oycrov.webp'
      : isRose
      ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      : isGold
      ? 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229911/GSH-66_S_zhi5zz.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229905/GSH-66_A_lqc7up.webp';

    return [
      {
        id: `gsh-66-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Double Glass T Hinge Joint)`,
        tag: finish,
      },
      {
        id: 'gsh-66-application',
        url: applicationImg,
        caption: 'Double Glass T Hinge Joint Architectural Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGP-04 D Seal PVC Profile
  if (product.code === 'GGP-04' || product.id === 'ggp-04') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404159/GGP-04_B_ktlvnv.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404159/GGP-04_T_aooh8j.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404159/GGP-04_A_zxvpii.webp';

    return [
      {
        id: `ggp-04-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black' : 'Transparent'} Finish Specification (D Seal PVC Profile)`,
        tag: isBlack ? 'Black' : 'Transparent',
      },
      {
        id: 'ggp-04-application',
        url: applicationImg,
        caption: 'PVC D-Seal Profile Glass Edge Sealing Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGP-M1 Magnetic Seal 180°
  if (product.code === 'GGP-M1' || product.id === 'ggp-m1') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404398/GGP-M1_B_nvvyp5.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404399/GGP-M1_S_x9obu8.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404394/GGP-M1_A_pnahbq.webp';

    return [
      {
        id: `ggp-m1-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (GGP-M1 BM)' : 'Transparent'} Finish Specification (Magnetic Seal 180°)`,
        tag: isBlack ? 'Black' : 'Transparent',
      },
      {
        id: 'ggp-m1-application',
        url: applicationImg,
        caption: '180° Glass Door Magnetic Sealing Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GGP-06 F Seal
  if (product.code === 'GGP-06' || product.id === 'ggp-06') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404641/GGP-06_B_q9vak9.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404641/GGP-06_S_pfbsil.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404640/GGP-06_A_ewilyc.webp';

    return [
      {
        id: `ggp-06-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (GGP-60 BM)' : 'Transparent'} Finish Specification (F Seal)`,
        tag: isBlack ? 'Black' : 'Transparent',
      },
      {
        id: 'ggp-06-application',
        url: applicationImg,
        caption: 'PVC F-Seal Profile Glass Edge Sealing Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GDH-TB-1 Shower Door Handle
  if (product.code === 'GDH-TB-1' || product.id === 'gdh-tb-1') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404928/GDH-TB-1_SSS___PSS_b_lp8lw5.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404929/GDH-TB-1_SSS___PSS_gquicg.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404928/GDH-TB-1_SSS___PSS_A_wgdbru.webp';

    return [
      {
        id: `gdh-tb-1-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (GDH-TB-1 BM)' : 'SSS / PSS'} Finish Specification (Shower Door Handle)`,
        tag: isBlack ? 'Black' : 'SSS / PSS',
      },
      {
        id: 'gdh-tb-1-application',
        url: applicationImg,
        caption: 'Shower Glass Door Tubular Handle Installation Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GDK-01 Door Knob
  if (product.code === 'GDK-01' || product.id === 'gdk-01') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405649/door_knob_b_aauxr6.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405649/door_knob_vib2sz.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405648/door_knob_a_yeod23.webp';

    return [
      {
        id: `gdk-01-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (GDK-01 BM)' : 'SSS / PSS'} Finish Specification (Glass Door Knob)`,
        tag: isBlack ? 'Black' : 'SSS / PSS',
      },
      {
        id: 'gdk-01-application',
        url: applicationImg,
        caption: 'Shower Enclosure Glass Door Knob Application Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GDK-02 Door Knob
  if (product.code === 'GDK-02' || product.id === 'gdk-02') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405863/GDK-02_B_qs3tjd.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405863/GDK-02_S_b1bg3i.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405864/GDK-02_A_v8b0tu.webp';

    return [
      {
        id: `gdk-02-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (GDK-02 BM)' : 'SSS / PSS'} Finish Specification (Shower / Glass Door Knob)`,
        tag: isBlack ? 'Black' : 'SSS / PSS',
      },
      {
        id: 'gdk-02-application',
        url: applicationImg,
        caption: 'Glass Shower Door Knob Architectural Application Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-01 Wall-to-Pipe Fitting
  if (product.code === 'GKH-01' || product.id === 'gkh-01') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406276/GKH-01_B_ybybvp.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406277/GKH-01_S_hrch2g.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406277/GKH-01_A_aycota.webp';

    return [
      {
        id: `gkh-01-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black' : 'Silver'} Finish Specification (Wall-to-Pipe Fitting)`,
        tag: isBlack ? 'Black' : 'Silver',
      },
      {
        id: 'gkh-01-application',
        url: applicationImg,
        caption: 'Shower Piping Wall-to-Pipe Junction Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-02 Round Series Pipe-to-Glass Fitting
  if (product.code === 'GKH-02' || product.id === 'gkh-02') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406484/GKH-02_B_uvxfw7.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406486/GKH-02_S_bfsrhm.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406485/GKH-02_A_kfmbdv.webp';

    return [
      {
        id: `gkh-02-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black' : 'Silver'} Finish Specification (Round Series Pipe-to-Glass Fitting)`,
        tag: isBlack ? 'Black' : 'Silver',
      },
      {
        id: 'gkh-02-application',
        url: applicationImg,
        caption: '19mm Pipe-to-Glass Connection Application Context',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-03 Round Pipe-to-Pipe Joint Fitting
  if (product.code === 'GKH-03' || product.id === 'gkh-03') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406715/GKH-03_B_fgb2mq.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406717/GKH-03_S_oypszi.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406714/GKH-03_A_y8vx6v.webp';

    return [
      {
        id: `gkh-03-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (BM)' : 'Silver'} Finish Specification (Round Pipe-to-Pipe Joint Fitting)`,
        tag: isBlack ? 'Black' : 'Silver',
      },
      {
        id: 'gkh-03-application',
        url: applicationImg,
        caption: 'Architectural Pipe-to-Pipe Spherical Joint Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-11 Square Series Wall-to-Pipe Fitting
  if (product.code === 'GKH-11' || product.id === 'gkh-11') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406885/GKH-11_B_xg9zb2.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406890/GKH-11_S_w6aj0m.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406884/GKH-11_A_csvswc.webp';

    return [
      {
        id: `gkh-11-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (BM)' : 'Silver'} Finish Specification (Square Series Wall-to-Pipe Fitting)`,
        tag: isBlack ? 'Black' : 'Silver',
      },
      {
        id: 'gkh-11-application',
        url: applicationImg,
        caption: 'Square Series 25mm Wall-to-Pipe Junction Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-13 Square Pipe-to-Pipe Joint Fitting
  if (product.code === 'GKH-13' || product.id === 'gkh-13') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407097/GKH-13_B_ltlrgp.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407099/GKH-13_S_l7juo6.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407096/GKH-13_A_z66jld.webp';

    return [
      {
        id: `gkh-13-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (BM)' : 'Silver'} Finish Specification (Square Pipe-to-Pipe Joint Fitting)`,
        tag: isBlack ? 'Black' : 'Silver',
      },
      {
        id: 'gkh-13-application',
        url: applicationImg,
        caption: 'Square Pipe-to-Pipe Spherical Joint Architectural Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-06 Reinforcing Rod
  if (product.code === 'GKH-06' || product.id === 'gkh-06') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407299/GKH-06_B_ioch10.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407301/GKH-06_S_ixghpj.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407298/GKH-06_A_f26fwd.webp';

    return [
      {
        id: `gkh-06-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (BM)' : 'Silver'} Finish Specification (19mm Reinforcing Rod)`,
        tag: isBlack ? 'Black' : 'Silver',
      },
      {
        id: 'gkh-06-application',
        url: applicationImg,
        caption: '19mm Reinforcing Rod Pipe-to-Pipe System Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-04 Pipe-to-Pipe T-Connector
  if (product.code === 'GKH-04' || product.id === 'gkh-04') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407452/GKH-04_B_bbmh9s.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407455/GKH-04_S_ajhu1a.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407451/GKH-04_A_bj0f94.webp';

    return [
      {
        id: `gkh-04-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black (BM)' : 'Silver'} Finish Specification (Pipe-to-Pipe T-Connector)`,
        tag: isBlack ? 'Black' : 'Silver',
      },
      {
        id: 'gkh-04-application',
        url: applicationImg,
        caption: 'Three-Way Pipe-to-Pipe T-Connector Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-12 Pipe-to-Glass Connector
  if (product.code === 'GKH-12' || product.id === 'gkh-12') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407625/GKH-12_B_vxaiqe.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407627/GKH-12_S_qhcyde.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407623/GKH-12_pwnmqk.webp';

    return [
      {
        id: `gkh-12-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Pipe-to-Glass Connector)`,
        tag: finish,
      },
      {
        id: 'gkh-12-application',
        url: applicationImg,
        caption: 'Square Pipe-to-Glass Connector Architectural Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-16 Reinforcing Rod — 25mm
  if (product.code === 'GKH-16' || product.id === 'gkh-16') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407864/GKH-16_B_ucnpwc.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407866/GKH-16_cwtbul.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407868/GKH-16_A_g5otfh.webp';

    return [
      {
        id: `gkh-16-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (25mm Reinforcing Rod)`,
        tag: finish,
      },
      {
        id: 'gkh-16-application',
        url: applicationImg,
        caption: '25mm Reinforcing Rod Architectural Pipe System Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GKH-14 Pipe-to-Pipe T-Connector
  if (product.code === 'GKH-14' || product.id === 'gkh-14') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790409276/GKH-14_B_bwmkxd.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790409279/GKH-14_S_birggw.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790409275/GKH-14_A_mdi7pj.webp';

    return [
      {
        id: `gkh-14-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${finish} Finish Specification (Square Pipe-to-Pipe T-Connector)`,
        tag: finish,
      },
      {
        id: 'gkh-14-application',
        url: applicationImg,
        caption: 'Square Three-Way Pipe-to-Pipe T-Connector Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GLS-11 A1 FS Shower Sliding System — Full Set
  if (product.code === 'GLS-11 A1 FS' || product.id === 'gls-11-a1-fs') {
    const isBlack = finish.toLowerCase().includes('black');

    const silverImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790690879/GLS-11_A1_S_k3zmh4.webp';
    const blackImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790690878/GLS-11_A1_B_ykejio.webp';

    const primaryImg = isBlack ? blackImg : silverImg;
    const secondaryImg = isBlack ? silverImg : blackImg;

    return [
      {
        id: `gls-11-a1-fs-${finish.toLowerCase()}-product`,
        url: primaryImg,
        caption: `${isBlack ? 'Black Matt (GLS-11 A1 BM FS — 2 Mtr.)' : 'Silver (GLS-11 A1 FS — 2 Mtr.)'} Finish Specification`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: `gls-11-a1-fs-${isBlack ? 'silver' : 'black'}-variant`,
        url: secondaryImg,
        caption: `${isBlack ? 'Silver (GLS-11 A1 FS — 2 Mtr.)' : 'Black Matt (GLS-11 A1 BM FS — 2 Mtr.)'} Variant Reference`,
        tag: isBlack ? 'Silver' : 'Black Matt',
      },
    ];
  }

  // Specific handler for GSL-22A Sliding Door System Full Set
  if (product.code === 'GSL-22A' || product.id === 'gsl-22a') {
    const isBlack = finish.toLowerCase().includes('black');

    const silverImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691005/GSL-22A_S_zsbj09.webp';
    const blackImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691005/GSL-22A_B_eay10q.webp';

    const primaryImg = isBlack ? blackImg : silverImg;
    const secondaryImg = isBlack ? silverImg : blackImg;

    return [
      {
        id: `gsl-22a-${finish.toLowerCase()}-product`,
        url: primaryImg,
        caption: `${isBlack ? 'Black Matt' : 'Silver'} Finish Specification (GSL-22A Sliding Door System Full Set)`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: `gsl-22a-${isBlack ? 'silver' : 'black'}-variant`,
        url: secondaryImg,
        caption: `${isBlack ? 'Silver' : 'Black Matt'} Variant Reference (GSL-22A)`,
        tag: isBlack ? 'Silver' : 'Black Matt',
      },
    ];
  }

  // Specific handler for GSL-44-A1 Sliding Roller Set
  if (product.code === 'GSL-44-A1' || product.id === 'gsl-44-a1') {
    const isBlack = finish.toLowerCase().includes('black');

    const silverImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691172/GSL-44-A1_sq9kud.webp';
    const blackImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691173/GSL-44-A1_B_csska6.webp';

    const primaryImg = isBlack ? blackImg : silverImg;
    const secondaryImg = isBlack ? silverImg : blackImg;

    return [
      {
        id: `gsl-44-a1-${finish.toLowerCase()}-product`,
        url: primaryImg,
        caption: `${isBlack ? 'Black Matt' : 'Silver'} Finish Specification (GSL-44-A1 Sliding Roller Set)`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: `gsl-44-a1-${isBlack ? 'silver' : 'black'}-variant`,
        url: secondaryImg,
        caption: `${isBlack ? 'Silver' : 'Black Matt'} Variant Reference (GSL-44-A1)`,
        tag: isBlack ? 'Silver' : 'Black Matt',
      },
    ];
  }

  // Specific handler for GSL-44-A2 Sliding Roller Set
  if (product.code === 'GSL-44-A2' || product.id === 'gsl-44-a2') {
    const isBlack = finish.toLowerCase().includes('black');

    const silverImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790692802/GSL-44-A2_giwlcm.webp';
    const blackImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790692802/b_GSL-44-A2_n06seg.webp';

    const primaryImg = isBlack ? blackImg : silverImg;
    const secondaryImg = isBlack ? silverImg : blackImg;

    return [
      {
        id: `gsl-44-a2-${finish.toLowerCase()}-product`,
        url: primaryImg,
        caption: `${isBlack ? 'Black Matt (GSL-44-A2 BM)' : 'Silver (GSL-44-A2)'} Finish Specification`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: `gsl-44-a2-${isBlack ? 'silver' : 'black'}-variant`,
        url: secondaryImg,
        caption: `${isBlack ? 'Silver (GSL-44-A2)' : 'Black Matt (GSL-44-A2 BM)'} Variant Reference`,
        tag: isBlack ? 'Silver' : 'Black Matt',
      },
    ];
  }

  // Specific handler for GLK-1 Bullet Lock
  if (product.code === 'GLK-1' || product.id === 'glk-1') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694252/GLK-01_B_xbdugf.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694252/GLK-01_mnkghc.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694252/GLK-01_A_d0u7gi.webp';

    return [
      {
        id: `glk-1-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black Matt (GLK-1 BM)' : 'Silver (GLK-1)'} Finish Specification (Bullet Lock — Only Knob)`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: 'glk-1-application',
        url: applicationImg,
        caption: 'Glass-to-Glass Bullet Lock / Rod Lock Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GLK-2 Bullet Lock
  if (product.code === 'GLK-2' || product.id === 'glk-2') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694457/GLK-2_B_brzvr5.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694458/GLK-2_yhih2j.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790695539/GLK-2_B_A_s87n3n.webp';

    return [
      {
        id: `glk-2-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black Matt (GLK-2 BM)' : 'Silver (GLK-2)'} Finish Specification (Wall-to-Glass Bullet Lock)`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: 'glk-2-application',
        url: applicationImg,
        caption: 'Wall-to-Glass Bullet Lock / Rod Lock Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GLK-3 Key & Knob Glass-to-Glass Lock
  if (product.code === 'GLK-3' || product.id === 'glk-3') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790698886/GLK-3_B_dbekox.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790698882/GLK-3_S_edzro3.webp';

    const applicationImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790698982/GLK_3_A_cgr4z6.webp';

    return [
      {
        id: `glk-3-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black Matt (GLK-3 BM)' : 'Silver (GLK-3)'} Finish Specification (Key & Knob Glass-to-Glass Lock)`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: 'glk-3-application',
        url: applicationImg,
        caption: 'Key & Knob Glass-to-Glass Lock Application',
        tag: 'Application',
      },
    ];
  }

  // Specific handler for GLK-4 Key & Knob Wall-to-Glass Lock
  if (product.code === 'GLK-4' || product.id === 'glk-4') {
    const isBlack = finish.toLowerCase().includes('black');

    const silverImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699445/GLK_04_dhfszy.webp';
    const blackImg = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699447/GLK-04_B_vbnvpo.webp';

    const primaryImg = isBlack ? blackImg : silverImg;
    const secondaryImg = isBlack ? silverImg : blackImg;

    return [
      {
        id: `glk-4-${finish.toLowerCase()}-product`,
        url: primaryImg,
        caption: `${isBlack ? 'Black Matt' : 'Silver'} Finish Specification (GLK-4 Key & Knob Wall-to-Glass Lock)`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: `glk-4-${isBlack ? 'silver' : 'black'}-variant`,
        url: secondaryImg,
        caption: `${isBlack ? 'Silver' : 'Black Matt'} Variant Reference (GLK-4)`,
        tag: isBlack ? 'Silver' : 'Black Matt',
      },
    ];
  }

  // Specific handler for GLK-9 Glass-to-Glass Lock — Key & Knob
  if (product.code === 'GLK-9' || product.id === 'glk-9') {
    const isBlack = finish.toLowerCase().includes('black');

    const variantImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699654/GLK-9_B_lsp7bu.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699653/GLK-9_A_si1fcg.webp';

    const secondaryImg = isBlack
      ? 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699653/GLK-9_A_si1fcg.webp'
      : 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699654/GLK-9_B_lsp7bu.webp';

    return [
      {
        id: `glk-9-${finish.toLowerCase()}-product`,
        url: variantImg,
        caption: `${isBlack ? 'Black Matt' : 'Silver'} Finish Specification (GLK-9 Glass-to-Glass Lock — Key & Knob)`,
        tag: isBlack ? 'Black Matt' : 'Silver',
      },
      {
        id: 'glk-9-application',
        url: secondaryImg,
        caption: isBlack
          ? 'Glass-to-Glass Lock — Key & Knob Application'
          : 'Black Matt Variant & Application Reference (GLK-9)',
        tag: isBlack ? 'Application' : 'Black / App',
      },
    ];
  }

  if (product.galleryImages && product.galleryImages.length > 0) {
    return product.galleryImages.map((url, index) => ({
      id: `custom-${index}`,
      url,
      caption: index === 0 ? 'Studio Specification' : index === 1 ? 'Installed Context' : 'Detail View',
      tag: index === 0 ? 'Studio' : index === 1 ? 'In-Situ' : 'Detail',
    }));
  }

  // Application/in-situ context images tailored by category and application
  const categoryContextImages: Record<string, string> = {
    'Patch Fittings': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    'Glass Connectors': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    'Shower Hinges': 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
    'PVC Profiles': 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'Shower Door Handles': 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'Door Knobs': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    'Shower Night Head': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    'ACC': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    'Shower Sliding System': 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
    'Sliding Door System': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'Sliding Roller Set & Accessories': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    'Locks Without Cutout': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    'Glass Door Handles': 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'Spider Fitting': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  };

  const inSituImage =
    categoryContextImages[product.category] ||
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80';

  const detailImage =
    product.secondaryImageUrl ||
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80';

  return [
    {
      id: `${product.id}-main`,
      url: product.imageUrl,
      caption: 'Studio Specification View',
      tag: 'Studio',
    },
    {
      id: `${product.id}-insitu`,
      url: inSituImage,
      caption: 'Architectural In-Situ Installation',
      tag: 'In-Situ',
    },
    {
      id: `${product.id}-detail`,
      url: detailImage,
      caption: 'Precision CNC Machining & Finish',
      tag: 'Detail',
    },
  ];
};

export const getEstimatedDimensions = (product: Product): string => {
  if (product.dimensions) return product.dimensions;

  const cat = product.category.toLowerCase();
  if (cat.includes('patch')) {
    return '164mm (L) × 52mm (W) × 32mm (H)';
  }
  if (cat.includes('hinge')) {
    return '90mm (H) × 55mm (W) × 45mm (D)';
  }
  if (cat.includes('connector')) {
    return '50mm × 50mm × 32mm Solid Block';
  }
  if (cat.includes('handle')) {
    return 'Ø25mm × 450mm CTC (Center-to-Center)';
  }
  if (cat.includes('knob')) {
    return 'Ø38mm × 40mm Dual-Sided Projection';
  }
  if (cat.includes('spider')) {
    return '200mm CTC Bolt Spread × 4-Arm Geometry';
  }
  if (cat.includes('profile')) {
    return '2200mm / 2500mm Stock Extrusion Length';
  }
  if (cat.includes('sliding')) {
    return '2000mm / 3000mm Track Profile • Ø54mm Rollers';
  }
  if (product.department === 'glassware') {
    return '2440mm × 1830mm / 3300mm × 2140mm Custom Cut';
  }
  return 'Standard Architectural Spec Dimensions';
};

export interface ArchitecturalFinish {
  id: string;
  name: string;
  colorName: string;
  swatchGradient: string;
  borderClass: string;
  accentDot: string;
}

export const ARCHITECTURAL_FINISHES: ArchitecturalFinish[] = [
  {
    id: 'silver',
    name: 'Silver',
    colorName: 'Silver',
    swatchGradient: 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 35%, #CBD5E1 65%, #94A3B8 100%)',
    borderClass: 'border-[#CBD5E1]',
    accentDot: '#94A3B8',
  },
  {
    id: 'black',
    name: 'Black',
    colorName: 'Black',
    swatchGradient: 'linear-gradient(135deg, #3F3F46 0%, #27272A 35%, #18181B 70%, #09090B 100%)',
    borderClass: 'border-[#27272A]',
    accentDot: '#18181B',
  },
  {
    id: 'rose-gold',
    name: 'Rose gold',
    colorName: 'Rose gold',
    swatchGradient: 'linear-gradient(135deg, #FFF1F2 0%, #FECDD3 30%, #FB7185 65%, #BE123C 100%)',
    borderClass: 'border-[#FDA4AF]',
    accentDot: '#FB7185',
  },
  {
    id: 'golden',
    name: 'Golden',
    colorName: 'Golden',
    swatchGradient: 'linear-gradient(135deg, #FEF9C3 0%, #FDE047 30%, #EAB308 65%, #A16207 100%)',
    borderClass: 'border-[#FDE047]',
    accentDot: '#EAB308',
  },
];

export const getFinishImages = (product: Product): Record<string, string> => {
  // GPF-40 finishes with exact Cloudinary URLs
  if (product.code === 'GPF-40' || product.id === 'gpf-40') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997542/GPF-40_S_f8mxdl.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997542/GPF-40_B_qt5m9e.webp',
      'Rose gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'Golden': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GPF-50 finishes with exact Cloudinary URLs
  if (product.code === 'GPF-50' || product.id === 'gpf-50') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997777/GPF-50_S_xj1e1t.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997776/GPF-50_B_x2g8de.webp',
      'Rose gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'Golden': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GPF-610 finishes with exact Cloudinary URLs
  if (product.code === 'GPF-610' || product.id === 'gpf-610') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998081/GPF-610_S_miiaqd.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998079/GPF-610_B_haa2f4.webp',
      'Rose gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'Golden': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GPF-650 finishes with exact Cloudinary URLs
  if (product.code === 'GPF-650' || product.id === 'gpf-650') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997936/GPF-650_S_eoz6gd.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997935/GPF-650_B_b5jjrv.webp',
    };
  }

  // GPF-620 finishes with exact Cloudinary URLs
  if (product.code === 'GPF-620' || product.id === 'gpf-620') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998257/GPF-620_S_ovcmz6.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998256/GPF-620_B_oh0wam.webp',
      'Rose gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'Golden': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GFS-MFH finishes with exact Cloudinary URLs
  if (product.code === 'GFS-MFH' || product.id === 'gfs-mfh') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789998386/GFS-MFH_a_p1psoz.webp',
      'Black': 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GGC-01A finishes with exact Cloudinary URLs
  if (product.code === 'GGC-01A' || product.id === 'ggc-01a') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790010808/GGC-01A_S_qll6ek.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790010776/GGC-01A_B_etmh0n.webp',
    };
  }

  // GGC-01 finishes with exact Cloudinary URLs
  if (product.code === 'GGC-01' || product.id === 'ggc-01') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790143835/GGC-01_S_gdj9in.jpg',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790143834/GGC-01_B_bww96b.jpg',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GGC-02 finishes with exact Cloudinary URLs
  if (product.code === 'GGC-02' || product.id === 'ggc-02') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144188/GGC-02_S_qanwh7.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144188/GGC-02_B_ohgyte.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GGC-03 finishes with exact Cloudinary URLs
  if (product.code === 'GGC-03' || product.id === 'ggc-03') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144446/GGC-03_S_jaivlc.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790144445/GGC-03_B_suo0v3.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GGC-04 finishes with exact Cloudinary URLs
  if (product.code === 'GGC-04' || product.id === 'ggc-04') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145255/O4_S_x06bxb.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145255/04_B_b6u4a7.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GGC-05 finishes with exact Cloudinary URLs
  if (product.code === 'GGC-05' || product.id === 'ggc-05') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145677/GGC-05_S_qws80t.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790145678/GGC-05_B_bzzkmh.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GGC-06 finishes with exact Cloudinary URLs
  if (product.code === 'GGC-06' || product.id === 'ggc-06') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790148863/GGC-06_s_kuyphb.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790148863/GGC-06_b_onlu41.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GSH-11 H/P finishes with exact Cloudinary URLs
  if (
    product.code === 'GSH-11 H/P' ||
    product.id === 'gsh-11-hp' ||
    product.code === 'GSH-11-HP'
  ) {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157711/GSH-11_HP_S_aobour.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157711/GSH-11_H_P_B_imbwgi.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GSH-11 finishes with exact Cloudinary URLs
  if (product.code === 'GSH-11' || product.id === 'gsh-11') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157960/GSH_11_irrmax.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157941/GSH_11_B_wimawd.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GSH-22 finishes with exact Cloudinary URLs
  if (product.code === 'GSH-22' || product.id === 'gsh-22') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790158354/GSH-22_S_gtshsm.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790158355/GSH-22_B_nhhraw.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GSH-33 finishes with exact Cloudinary URLs
  if (product.code === 'GSH-33' || product.id === 'gsh-33') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790159035/GSH-33_S_cdeca5.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790159032/GSH-33_B_mw8vxv.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GSH-55 finishes with exact Cloudinary URLs
  if (product.code === 'GSH-55' || product.id === 'gsh-55') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229263/GSH-55_s_lj1ksl.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229234/GSH-55_b_kilacr.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GSH-44 finishes with exact Cloudinary URLs
  if (product.code === 'GSH-44' || product.id === 'gsh-44') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229617/GSH_44_may6ep.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229616/GSH_44_B_gvpdkt.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GSH-66 finishes with exact Cloudinary URLs
  if (product.code === 'GSH-66' || product.id === 'gsh-66') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229911/GSH-66_S_zhi5zz.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790229910/GSH-66_B_oycrov.webp',
      'Gold': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Rose Gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // GGP-04 finishes with exact Cloudinary URLs
  if (product.code === 'GGP-04' || product.id === 'ggp-04') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404159/GGP-04_T_aooh8j.webp',
      'Transparent': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404159/GGP-04_T_aooh8j.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404159/GGP-04_B_ktlvnv.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404159/GGP-04_T_aooh8j.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404159/GGP-04_T_aooh8j.webp',
    };
  }

  // GGP-M1 finishes with exact Cloudinary URLs
  if (product.code === 'GGP-M1' || product.id === 'ggp-m1') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404399/GGP-M1_S_x9obu8.webp',
      'Transparent': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404399/GGP-M1_S_x9obu8.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404398/GGP-M1_B_nvvyp5.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404399/GGP-M1_S_x9obu8.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404399/GGP-M1_S_x9obu8.webp',
    };
  }

  // GGP-06 finishes with exact Cloudinary URLs
  if (product.code === 'GGP-06' || product.id === 'ggp-06') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404641/GGP-06_S_pfbsil.webp',
      'Transparent': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404641/GGP-06_S_pfbsil.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404641/GGP-06_B_q9vak9.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404641/GGP-06_S_pfbsil.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404641/GGP-06_S_pfbsil.webp',
    };
  }

  // GDH-TB-1 finishes with exact Cloudinary URLs
  if (product.code === 'GDH-TB-1' || product.id === 'gdh-tb-1') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404929/GDH-TB-1_SSS___PSS_gquicg.webp',
      'SSS / PSS': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404929/GDH-TB-1_SSS___PSS_gquicg.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404928/GDH-TB-1_SSS___PSS_b_lp8lw5.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404929/GDH-TB-1_SSS___PSS_gquicg.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790404929/GDH-TB-1_SSS___PSS_gquicg.webp',
    };
  }

  // GDK-01 finishes with exact Cloudinary URLs
  if (product.code === 'GDK-01' || product.id === 'gdk-01') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405649/door_knob_vib2sz.webp',
      'SSS / PSS': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405649/door_knob_vib2sz.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405649/door_knob_b_aauxr6.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405649/door_knob_vib2sz.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405649/door_knob_vib2sz.webp',
    };
  }

  // GDK-02 finishes with exact Cloudinary URLs
  if (product.code === 'GDK-02' || product.id === 'gdk-02') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405863/GDK-02_S_b1bg3i.webp',
      'SSS / PSS': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405863/GDK-02_S_b1bg3i.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405863/GDK-02_B_qs3tjd.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405863/GDK-02_S_b1bg3i.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790405863/GDK-02_S_b1bg3i.webp',
    };
  }

  // GKH-01 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-01' || product.id === 'gkh-01') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406277/GKH-01_S_hrch2g.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406276/GKH-01_B_ybybvp.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406277/GKH-01_S_hrch2g.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406277/GKH-01_S_hrch2g.webp',
    };
  }

  // GKH-02 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-02' || product.id === 'gkh-02') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406486/GKH-02_S_bfsrhm.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406484/GKH-02_B_uvxfw7.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406486/GKH-02_S_bfsrhm.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406486/GKH-02_S_bfsrhm.webp',
    };
  }

  // GKH-03 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-03' || product.id === 'gkh-03') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406717/GKH-03_S_oypszi.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406715/GKH-03_B_fgb2mq.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406717/GKH-03_S_oypszi.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406717/GKH-03_S_oypszi.webp',
    };
  }

  // GKH-11 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-11' || product.id === 'gkh-11') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406890/GKH-11_S_w6aj0m.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406885/GKH-11_B_xg9zb2.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406890/GKH-11_S_w6aj0m.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790406890/GKH-11_S_w6aj0m.webp',
    };
  }

  // GKH-13 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-13' || product.id === 'gkh-13') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407099/GKH-13_S_l7juo6.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407097/GKH-13_B_ltlrgp.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407099/GKH-13_S_l7juo6.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407099/GKH-13_S_l7juo6.webp',
    };
  }

  // GKH-06 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-06' || product.id === 'gkh-06') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407301/GKH-06_S_ixghpj.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407299/GKH-06_B_ioch10.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407301/GKH-06_S_ixghpj.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407301/GKH-06_S_ixghpj.webp',
    };
  }

  // GKH-04 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-04' || product.id === 'gkh-04') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407455/GKH-04_S_ajhu1a.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407452/GKH-04_B_bbmh9s.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407455/GKH-04_S_ajhu1a.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407455/GKH-04_S_ajhu1a.webp',
    };
  }

  // GKH-12 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-12' || product.id === 'gkh-12') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407627/GKH-12_S_qhcyde.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407625/GKH-12_B_vxaiqe.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407627/GKH-12_S_qhcyde.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407627/GKH-12_S_qhcyde.webp',
    };
  }

  // GKH-16 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-16' || product.id === 'gkh-16') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407866/GKH-16_cwtbul.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407864/GKH-16_B_ucnpwc.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407866/GKH-16_cwtbul.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790407866/GKH-16_cwtbul.webp',
    };
  }

  // GKH-14 finishes with exact Cloudinary URLs
  if (product.code === 'GKH-14' || product.id === 'gkh-14') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790409279/GKH-14_S_birggw.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790409276/GKH-14_B_bwmkxd.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790409279/GKH-14_S_birggw.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790409279/GKH-14_S_birggw.webp',
    };
  }

  // GLS-11 A1 FS finishes with exact Cloudinary URLs
  if (product.code === 'GLS-11 A1 FS' || product.id === 'gls-11-a1-fs') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790690879/GLS-11_A1_S_k3zmh4.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790690878/GLS-11_A1_B_ykejio.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790690879/GLS-11_A1_S_k3zmh4.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790690879/GLS-11_A1_S_k3zmh4.webp',
    };
  }

  // GSL-22A finishes with exact Cloudinary URLs
  if (product.code === 'GSL-22A' || product.id === 'gsl-22a') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691005/GSL-22A_S_zsbj09.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691005/GSL-22A_B_eay10q.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691005/GSL-22A_S_zsbj09.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691005/GSL-22A_S_zsbj09.webp',
    };
  }

  // GSL-44-A1 finishes with exact Cloudinary URLs
  if (product.code === 'GSL-44-A1' || product.id === 'gsl-44-a1') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691172/GSL-44-A1_sq9kud.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691173/GSL-44-A1_B_csska6.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691172/GSL-44-A1_sq9kud.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790691172/GSL-44-A1_sq9kud.webp',
    };
  }

  // GSL-44-A2 finishes with exact Cloudinary URLs
  if (product.code === 'GSL-44-A2' || product.id === 'gsl-44-a2') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790692802/GSL-44-A2_giwlcm.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790692802/b_GSL-44-A2_n06seg.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790692802/GSL-44-A2_giwlcm.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790692802/GSL-44-A2_giwlcm.webp',
    };
  }

  // GLK-1 finishes with exact Cloudinary URLs
  if (product.code === 'GLK-1' || product.id === 'glk-1') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694252/GLK-01_mnkghc.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694252/GLK-01_B_xbdugf.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694252/GLK-01_mnkghc.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694252/GLK-01_mnkghc.webp',
    };
  }

  // GLK-2 finishes with exact Cloudinary URLs
  if (product.code === 'GLK-2' || product.id === 'glk-2') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694458/GLK-2_yhih2j.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694457/GLK-2_B_brzvr5.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694458/GLK-2_yhih2j.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790694458/GLK-2_yhih2j.webp',
    };
  }

  // GLK-3 finishes with exact Cloudinary URLs
  if (product.code === 'GLK-3' || product.id === 'glk-3') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790698882/GLK-3_S_edzro3.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790698886/GLK-3_B_dbekox.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790698882/GLK-3_S_edzro3.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790698882/GLK-3_S_edzro3.webp',
    };
  }

  // GLK-4 finishes with exact Cloudinary URLs
  if (product.code === 'GLK-4' || product.id === 'glk-4') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699445/GLK_04_dhfszy.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699447/GLK-04_B_vbnvpo.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699445/GLK_04_dhfszy.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699445/GLK_04_dhfszy.webp',
    };
  }

  // GLK-9 finishes with exact Cloudinary URLs
  if (product.code === 'GLK-9' || product.id === 'glk-9') {
    return {
      'Silver': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699653/GLK-9_A_si1fcg.webp',
      'Black': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699654/GLK-9_B_lsp7bu.webp',
      'Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699653/GLK-9_A_si1fcg.webp',
      'Rose Gold': 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790699653/GLK-9_A_si1fcg.webp',
    };
  }

  // If product belongs to glassware
  if (product.department === 'glassware') {
    return {
      'Silver': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'Black': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'Rose gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'Golden': 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    };
  }

  const cat = product.category.toLowerCase();
  if (cat.includes('hinge')) {
    return {
      'Silver': 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
      'Black': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      'Rose gold': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'Golden': 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
    };
  }
  if (cat.includes('handle') || cat.includes('knob')) {
    return {
      'Silver': 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
      'Black': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'Rose gold': 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
      'Golden': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    };
  }
  if (cat.includes('sliding') || cat.includes('roller')) {
    return {
      'Silver': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'Black': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'Rose gold': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'Golden': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    };
  }

  // Default Patch fittings, Connectors, Spider, Locks, etc.
  return {
    'Silver': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    'Black': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    'Rose gold': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    'Golden': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
  };
};

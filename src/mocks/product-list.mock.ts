type ProductStatus = 'disponible' | 'disponible uniquement en magasin' | 'indisponible en ligne' | 'en réapprovisionnement' | 'épuisé';
type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
type ProductFit = 'près du corps' | 'oversized' | 'loose' | 'regular'| 'ample'|'slim'|'tight';



export interface Product {
    id: number;
    // Bien mettre une majuscule et au pluriel pour le titre de la page single-catégory
    category: string;
    reference: string;
    productSize: ProductSize;
    price: number;
    productStatus: ProductStatus;
    isAvailable: boolean;
    description: string;
    productFit: ProductFit;
    composition: string;
    washingMaintenance: string;
    photoOne: string;
    photoTwo: string;
    photoThree: string;
    photoFour: string;
}

// saison: 1 hiver/automne, 2 printemps/été
// puis 22 (2022)
// P (Pull), J (veste), S (jupe)..
// +(pré)nom du design

export const PRODUCTLIST: Product[] = [



    // PULLS
    {
        id: 1,
        category: "Pulls",
        reference: 'Pull torsade chiné',
        productSize: 'XS',
        price: 69.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull avec torsade en grossse maille chinée avec col rond. Pièce chaude de plein hiver.',
        productFit: 'oversized',
        composition: '80% laine, 10% polyester recyclé, 10% polyamide',
        washingMaintenance: "lavage délicat à 30◦, blanchiment interdit, séchage à plat uniquement, repassage doux sur l'envers, nettoyage à sec autorisé.",
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-vert/woman-in-a-green-sweater.jpg",
        photoTwo: "/assets/img/products-images/femme/pull/pull-femme-vert/woman-in-a-green-sweater-vue2.jpg",
        photoThree: "/assets/img/products-images/femme/pull/pull-femme-vert/woman-in-a-green-sweater-vue4.jpg",
        photoFour: "/assets/img/products-images/femme/pull/pull-femme-vert/woman-in-a-green-sweater-vue3.jpg",
    },
    {
        id: 2,
        category: "Pulls",
        reference: 'Pull chaussette',
        productSize: 'XS',
        price: 39.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull chaussette en maille fine près du corps pour toutes saisons.',
        productFit: 'près du corps',
        composition: '92% polyester recyclé, 8% élasthanne',
        washingMaintenance: "lavage à 30◦, blanchiment interdit, séchage en tambour cycle normal, repassage doux sur l'envers, nettoyage à sec autorisé.",
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-kaki/photo-01.jpeg",
        photoTwo: "/assets/img/products-images/femme/pull/pull-femme-kaki/photo-02.jpeg",
        photoThree: "/assets/img/products-images/femme/pull/pull-femme-kaki/photo-03.jpeg",
        photoFour: "/assets/img/products-images/femme/pull/pull-femme-kaki/photo-04.jpeg",
    },
        // ID 2 POYESTER RECYCLE
    {
        id: 2,
        category: "Polyester recyclé",
        reference: 'Pull chaussette',
        productSize: 'XS',
        price: 39.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull chaussette en maille fine près du corps pour toutes saisons.',
        productFit: 'près du corps',
        composition: '92% polyester recyclé, 8% élasthanne',
        washingMaintenance: "lavage à 30◦, blanchiment interdit, séchage en tambour cycle normal, repassage doux sur l'envers, nettoyage à sec autorisé.",
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-kaki/photo-01.jpeg",
        photoTwo: "/assets/img/products-images/femme/pull/pull-femme-kaki/photo-02.jpeg",
        photoThree: "/assets/img/products-images/femme/pull/pull-femme-kaki/photo-03.jpeg",
        photoFour: "/assets/img/products-images/femme/pull/pull-femme-kaki/photo-04.jpeg",
        },


    {
        id: 3,
        category: "Pulls", 
        reference: 'Gilet oversized 100% coton bio',
        productSize: 'XS',
        price: 59.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Cardigan ample et court en grosses côtes.',
        productFit: 'oversized',
        composition: '100% coton bio',
        washingMaintenance: "lavage à 40◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé.",
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_01 - Grande.jpeg",
        photoTwo: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_02 - Grande.jpeg",
        photoThree: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_03 - Grande.jpeg",
        photoFour: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_04 - Grande.jpeg",
    },

    // ID 3 100% COTON BIO
    {
        id: 3,
        category: "Coton bio", 
        reference: 'Gilet oversized 100% coton bio',
        productSize: 'XS',
        price: 59.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Cardigan ample et court en grosses côtes.',
        productFit: 'oversized',
        composition: '100% coton bio',
        washingMaintenance: "lavage à 40◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé.",
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_01 - Grande.jpeg",
        photoTwo: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_02 - Grande.jpeg",
        photoThree: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_03 - Grande.jpeg",
        photoFour: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_04 - Grande.jpeg",
        },


    {
        id: 4,
        category: "Pulls",
        reference: 'Pull maille fine chiné',
        productSize: 'XS',
        price: 29.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull col montant en maille légère chinée.',
        productFit: 'regular',
        composition: '100% coton recyclé',
        washingMaintenance: "lavage à 40◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé.",
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-bleu/DxCNh7GU0AExnB8 - Grande.jpeg",
        photoTwo: "/assets/img/products-images/femme/pull/pull-femme-bleu/409388_B36A06_portrait_HD_1.JPG",
        photoThree: "/assets/img/products-images/femme/pull/pull-femme-bleu/409388_B36A06_portrait_HD_4.JPG",
        photoFour: "/assets/img/products-images/femme/pull/pull-femme-bleu/409388_B36A06_portrait_HD_1.JPG",
    },
    {
        id: 5,
        category: "Pulls",
        reference: 'Pull en côte anglaise',
        productSize: 'XS',
        price: 79.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull col rond en côte anglaise grosse jauge.',
        productFit: 'regular',
        composition: '90% coton bio, 10% cachemire',
        washingMaintenance: "lavage à la main, blanchiment interdit, séchage suspendu à l'ombre, repassage à fer doux (1 point), nettoyage à sec recommandé.",
        photoOne: "assets/img/products-images/femme/pull/pull-femme-bleu-clair/molnar-balint-1RhBy4VkZeQ-unsplash.jpeg",
        photoTwo: "assets/img/products-images/femme/pull/pull-femme-bleu-clair/e8b23bc4515d45bdb66bbedb346b4849 - Grande.jpg",
        photoThree: "assets/img/products-images/femme/pull/pull-femme-bleu-clair/molnar-balint-1RhBy4VkZeQ-unsplash-vue2 - Grande.jpeg",
        photoFour: "assets/img/products-images/femme/pull/pull-femme-bleu-clair/afd03de5562d4c7184196e14915c2f31 - Grande.jpg",
    },
    {
        id: 6,
        category: "Pulls",
        reference: 'Pull en jeux de maille',
        productSize: 'XS',
        price: 79.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull col rond en jeux de mailles diminuées.',
        productFit: 'oversized',
        composition: '100% coton bio',
        washingMaintenance: "lavage délicat à 30◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé.",
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-orange/product6.jpeg",
        photoTwo: "assets/img/products-images/femme/pull/pull-femme-orange/product6 zoom.jpeg",
        photoThree: "assets/img/products-images/femme/pull/pull-femme-orange/hmgoepprod.jpeg",
        photoFour: "assets/img/products-images/femme/pull/pull-femme-orange/hmgoepprod zoom.jpeg",
    },
    {
        id: 7,
        category: "Pulls",
        reference: 'Pull rayé multicolore',
        productSize: 'XS',
        price: 59.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull col rond multicolore en maille perlée.',
        productFit: 'oversized',
        composition: '50% coton, 50% lin',
        washingMaintenance: "lavage délicat à 40◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/pull/pull-femme-arc-en-ciel/product7.jpg",
        photoTwo: "assets/img/products-images/femme/pull/pull-femme-arc-en-ciel/product72.jpeg",
        photoThree: "assets/img/products-images/femme/pull/pull-femme-arc-en-ciel/product73.jpeg",
        photoFour: "assets/img/products-images/femme/pull/pull-femme-arc-en-ciel/product74.jpeg",
    },
    {
        id: 8,
        category: "Pulls",
        reference: 'Pull angora ajouré',
        productSize: 'XS',
        price: 89.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull angora avec détails ajourés sur les manches.',
        productFit: 'regular',
        composition: '100% angora éthique',
        washingMaintenance: "lavage délicat à la main, blanchiment interdit, séchage à plat uniquement, repassage à fer doux (1 point), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/pull/pull-femme-blanc-2/191112-adt2-002_1024x1024@2x.jpg",
        photoTwo: "assets/img/products-images/femme/pull/pull-femme-blanc-2/191112-adt2-005_1024x1024@2x.jpg",
        photoThree: "assets/img/products-images/femme/pull/pull-femme-blanc-2/191112-adt2-020_1024x1024@2x.jpg",
        photoFour: "assets/img/products-images/femme/pull/pull-femme-blanc-2/CaptureOneCatalog0798_Moyen_1024x1024@2x.jpg",
    },

    // ROBES
    {
        id: 9,
        category: "Robes",
	    reference: "Robe bicolore brodée",
        productSize: 'XS',
        price: 129.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe manche courte bicolore avec bas en mousseline et haut en jersey, avec broderies perlées.',
        productFit: 'regular',
        composition: '52% coton bio, 48% Polyester recyclé',
	    washingMaintenance:"lavage délicat à la main, blanchiment interdit, séchage suspendu à l'ombre, repassage doux sur l'envers, nettoyage à sec autorisé. ",
        photoOne: "assets/img/products-images/femme/robes/robe_1.jpeg",
        photoTwo: "assets/img/products-images/femme/robes/robe_1.jpeg",
        photoThree: "assets/img/products-images/femme/robes/robe_1.jpeg",
        photoFour: "assets/img/products-images/femme/robes/robe_1.jpeg",
        },

        {
	    id: 10,
        category: "Robes",
	    reference: "Robe en broderie ajourée",
        productSize: 'XS',
        price: 99.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe unie manches trois-quart, entièrement couverte de broderie anglaise.',
        productFit: 'regular',
        composition: '100% coton bio',
	    washingMaintenance:"lavage délicat à 30°, blanchiment autorisé, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/robes/robe_2.jpeg",
        photoTwo: "assets/img/products-images/femme/robes/robe_2.jpeg",
        photoThree: "assets/img/products-images/femme/robes/robe_2.jpeg",
        photoFour: "assets/img/products-images/femme/robes/robe_2.jpeg",
        },
    
        {
	    id: 11,
        category: "Robes",
	    reference: "Robe plumetis",
        productSize: 'XS',
        price: 129.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe manche longue en tissu à texture plumetis, à emmanchures volantées, découpe empire sous poitrine et boutonnage devant.',
        productFit: 'regular',
        composition: '100% viscose',
	    washingMaintenance:"lavage délicat à 30°, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/robes/robe_4.jpeg",
        photoTwo: "assets/img/products-images/femme/robes/robe_4.jpeg",
        photoThree: "assets/img/products-images/femme/robes/robe_4.jpeg",
        photoFour: "assets/img/products-images/femme/robes/robe_4.jpeg",
        },

        {
        id: 12,
        category: "Robes",
        reference: "Robe longue imprimée",
        productSize: 'XS',
        price: 199.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe imprimé fleur manches courtes drapées, entièrement couverte de broderie anglaise.',
        productFit: 'regular',
        composition: '100% soie',
        washingMaintenance:"lavage délicat à la main, blanchiment interdit, séchage suspendu à l'ombre, repassage doux sur l'envers, nettoyage à sec déconseillé.",
        photoOne: "assets/img/products-images/femme/robes/robe_3.jpeg",
        photoTwo: "assets/img/products-images/femme/robes/robe_3.jpeg",
        photoThree: "assets/img/products-images/femme/robes/robe_3.jpeg",
        photoFour: "assets/img/products-images/femme/robes/robe_3.jpeg",
        },

        {
        id: 13,
        category: "Robes",
	    reference: "Robe dos nu",
        productSize: 'XS',
        price: 129.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe en soie plissée dos-nu, avec encolure nouée dans le dos, et jeu de découpes devant.',
        productFit: 'regular',
        composition: '100% soie',
	    washingMaintenance:"lavage délicat à la main, blanchiment interdit, séchage suspendu à l'ombre, repassage doux sur l'envers, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/robes/robe_5.jpeg",
        photoTwo: "assets/img/products-images/femme/robes/robe_5.jpeg",
        photoThree: "assets/img/products-images/femme/robes/robe_5.jpeg",
        photoFour: "assets/img/products-images/femme/robes/robe_5.jpeg",
        },

        {
        id: 14,
        category: "Robes",
	    reference: "Robe longue imprimée",
        productSize: 'XS',
        price: 129.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe imprimé manches longues à encolure nouée et froncée, grands poignets et devant boutonnés.',
        productFit: 'regular',
        composition: '100% Polyester recyclé',
	    washingMaintenance:"lavage délicat à 30°, blanchiment interdit, séchage suspendu à l'ombre, repassage doux sur l'envers, nettoyage à sec déconseillé.",
        photoOne: "assets/img/products-images/femme/robes/robe_6.jpeg",
        photoTwo: "assets/img/products-images/femme/robes/robe_6.jpeg",
        photoThree: "assets/img/products-images/femme/robes/robe_6.jpeg",
        photoFour: "assets/img/products-images/femme/robes/robe_6.jpeg",
        },

        {
        id: 15,
        category: "Robes",
	    reference: "Robe courte imprimée",
        productSize: 'XS',
        price: 129.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe en soie imprimée à bretelle, avec volants sous poitrine et en bas.',
        productFit: 'regular',
        composition: '100% soie',
	    washingMaintenance:"lavage délicat à la main, blanchiment interdit, séchage suspendu à l'ombre, repassage doux sur l'envers, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/robes/robe_7.jpeg",
        photoTwo: "assets/img/products-images/femme/robes/robe_7.jpeg",
        photoThree: "assets/img/products-images/femme/robes/robe_7.jpeg",
        photoFour: "assets/img/products-images/femme/robes/robe_7.jpeg",
        },

        {
        id: 16,
        category: "Robes",
	    reference: "Robe longue imprimée",
        productSize: 'XS',
        price: 119.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe imprimée à fleur,bretelles larges à volant, et découpe à la taille.',
        productFit: 'regular',
        composition: '100% Polyester recyclé',
	    washingMaintenance:"lavage délicat à la main, blanchiment interdit, séchage suspendu à l'ombre, repassage doux sur l'envers, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/robes/robe_8_1.jpeg",
        photoTwo: "assets/img/products-images/femme/robes/robe_8_2.jpeg",
        photoThree: "assets/img/products-images/femme/robes/robe_8_3.jpeg",
        photoFour: "assets/img/products-images/femme/robes/robe_8_4.jpeg",
        },


    // TOPS
    {
        id: 17,
        category: 'Tops',
	    reference: 'Chemise poche poitrine',
        productSize: 'XS',
        price: 49.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Chemise rayée coupe boyfriend avec poche poitrine gauche',
        productFit: 'oversized',
        composition: '100% coton bio',
	    washingMaintenance:"lavage à 40◦, blanchiment interdit, séchage en tambour cycle délicat, repassage à feu moyen, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/tops/top-Chemise-poche-poitrine/top_1_1.jpeg",
        photoTwo: "assets/img/products-images/femme/tops/top-Chemise-poche-poitrine/top_1_2.jpeg",
        photoThree: "assets/img/products-images/femme/tops/top-Chemise-poche-poitrine/top_1_3.jpeg",
        photoFour: "assets/img/products-images/femme/tops/top-Chemise-poche-poitrine/top_1_4.jpeg",
    },

    {
        id: 18,
        category: 'Tops',
	    reference: 'T-shirt basique noir',
        productSize: 'XS',
        price: 19.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'T-shirt basique confortable.',
        productFit: 'regular',
        composition: '100% coton bio',
	    washingMaintenance:"lavage à 40◦, blanchiment interdit, séchage en tambour cycle délicat, repassage à fer moyen (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/tops/top-T-shirt-basique-noir/top_2_1.jpeg",
        photoTwo: "assets/img/products-images/femme/tops/top-T-shirt-basique-noir/top_2_3.jpeg",
        photoThree: "assets/img/products-images/femme/tops/top-T-shirt-basique-noir/top_2_2.jpeg",
        photoFour: "assets/img/products-images/femme/tops/top-T-shirt-basique-noir/top_2_4.jpeg",
    },

    {
	    id: 19,
        category: 'Tops',
	    reference: 'Top à bretelles',
        productSize: 'XS',
        price: 14.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Top à bretelles en côte plate et encolure V.',
        productFit: 'tight',
        composition: '90% coton bio, 10% polyester recyclé',
	    washingMaintenance:"lavage à 40◦, blanchiment interdit, séchage en tambour cycle délicat, repassage à fer moyen (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/tops/Top-a-bretelles/top_3_1.jpeg",
        photoTwo: "assets/img/products-images/femme/tops/Top-a-bretelles/top_3_2.jpeg",
        photoThree: "assets/img/products-images/femme/tops/Top-a-bretelles/top_3 _3.jpeg",
        photoFour: "assets/img/products-images/femme/tops/Top-a-bretelles/top_3_4.jpeg",
    },

    {
        id: 20,
        category: 'Tops',
        reference: 'Cache-coeur drapé',
        productSize: 'XS',
        price: 39.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Cache-coeur drapé aux épaules avec manches courtes retroussées.',
        productFit: 'ample',
        composition: '100% coton bio',
        washingMaintenance:"lavage à 40◦, blanchiment interdit, séchage en tambour cycle délicat, repassage à fer moyen (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/tops/top-Cache-coeur-drape/pexels-mert-cokun-14897070 - Grande.jpeg",
        photoTwo: "assets/img/products-images/femme/tops/top-Cache-coeur-drape/pexels-mert-cokun-14897093 - Grande.jpeg",
        photoThree: "assets/img/products-images/femme/tops/top-Cache-coeur-drape/pexels-mert-cokun-14897093.jpeg",
        photoFour: "assets/img/products-images/femme/tops/top-Cache-coeur-drape/pexels-mert-cokun-14897131 - Grande.jpeg",
    },

    {
        id: 21,
        category: 'Tops',
        reference: 'T-shirt basique blanc',
        productSize: 'XS',
        price: 19.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'T-shirt basique confortable.',
        productFit: 'regular',
        composition: '100% coton bio',
        washingMaintenance:"lavage à 40◦, blanchiment interdit, séchage en tambour cycle délicat, repassage à fer moyen (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/tops/top-T-shirt-basique-blanc/pexels-monstera-6311475.jpg",
        photoTwo: "assets/img/products-images/femme/tops/top-T-shirt-basique-blanc/pexels-monstera-6311475 copie.jpg",
        photoThree: "assets/img/products-images/femme/tops/top-T-shirt-basique-blanc/pexels-monstera-6311326.jpg",
        photoFour: "assets/img/products-images/femme/tops/top-T-shirt-basique-blanc/tshirtblanc01.png",
    },
    
    {
        id: 22,
        category: 'Tops',
        reference: 'Débardeur message',
        productSize: 'XS',
        price: 19.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Débardeur léger sérigraphié avec message sur le devant.',
        productFit: 'regular',
        composition: '100% coton bio',
        washingMaintenance:"lavage à 40◦, blanchiment interdit, séchage en tambour cycle délicat, repassage à fer moyen (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/tops/top-debardeur-message/top_6_1.jpeg",
        photoTwo: "assets/img/products-images/femme/tops/top-debardeur-message/top_6_2.jpeg",
        photoThree: "assets/img/products-images/femme/tops/top-debardeur-message/top_6_3.jpeg",
        photoFour: "assets/img/products-images/femme/tops/top-debardeur-message/top_6_4.jpeg",
    },

    {
	    id: 23,
        category: 'Tops',
	    reference: 'Sweat-shirt basique',
        productSize: 'XS',
        price: 39.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Sweat-shirt basique confortable, avec broderie planète côté coeur.',
        productFit: 'oversized',
        composition: '100% coton bio',
	    washingMaintenance:"lavage à 40◦, blanchiment interdit, séchage en tambour cycle délicat, repassage à fer moyen (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/tops/top-Sweat-shirt-basique/top_7_1.jpeg",
        photoTwo: "assets/img/products-images/femme/tops/top-Sweat-shirt-basique/top_7_2.jpeg",
        photoThree: "assets/img/products-images/femme/tops/top-Sweat-shirt-basique/top_7_3.jpeg",
        photoFour: "assets/img/products-images/femme/tops/top-Sweat-shirt-basique/top_7_4.jpeg",
    },

    {
	    id: 24,
        category: 'Tops',
	    reference: 'Top à bretelles fantaisie',
        productSize: 'XS',
        price: 19.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Top à bretelles en tissu carreaux Vichy et noeud encolure devant.',
        productFit: 'loose',
        composition: '100% coton bio',
	    washingMaintenance:"lavage à 40◦, blanchiment interdit, séchage en tambour cycle délicat, repassage à fer moyen (2 points), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/tops/top-Top-a-bretelles-fantaisie/top_8_1.jpeg",
        photoTwo: "assets/img/products-images/femme/tops/top-Top-a-bretelles-fantaisie/top_8_2.jpeg",
        photoThree: "assets/img/products-images/femme/tops/top-Top-a-bretelles-fantaisie/top_8_3.jpeg",
        photoFour: "assets/img/products-images/femme/tops/top-Top-a-bretelles-fantaisie/top_8_4.jpeg",
    },

    // BAS


    // VETEMENTS DE FETE
    {
        id: 33,
        category: 'Vêtements de soirée',
	    reference: 'Robe brodée à pétales',
        productSize: 'XS',
        price: 299.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe longue en mousseline, brodée avec des pétales de tissu. Encolure ronde, doublée sous la taille .',
        productFit: 'regular',
        composition: '100% polyester recyclé.',
	    washingMaintenance:"Nettoyage à sec uniquement.",
        photoOne: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_1.jpeg",
        photoTwo: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_1.jpeg",
        photoThree: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_1.jpeg",
        photoFour: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_1.jpeg",
        },

	    {id: 34,
        category: 'Vêtements de soirée',
	    reference: 'Robe imprimé métallisé',
        productSize: 'XS',
        price: 199.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe fluide à impression métallisée, col noué dans le dos, et fente devant .',
        productFit: 'regular',
        composition: '100% polyester recyclé.',
	    washingMaintenance:"Lavage à la main sur l’envers, blanchiment interdit, séchage suspendu à l’ombre, repassage doux sur l’envers, nettoyage à sec déconseillé.",
        photoOne: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_2.jpeg",
        photoTwo: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_2.jpeg",
        photoThree: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_2.jpeg",
        photoFour: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_2.jpeg",
        },

	    {id: 35,
        category: 'Vêtements de soirée',
	    reference: 'Robe courte à volants',
        productSize: 'XS',
        price: 249.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe courte en plumetis, avec découpe V transparente devant, et volantsen résille  .',
        productFit: 'regular',
	    composition:  "70% polyester recyclé, 30% viscose.",
	    washingMaintenance:"Lavage à la main sur l’envers, blanchiment interdit, séchage suspendu à l’ombre, repassage doux sur l’envers, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_3.jpeg",
        photoTwo: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_3.jpeg",
        photoThree: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_3.jpeg",
        photoFour: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_3.jpeg",
        },

	    {
        id: 36,
        category: 'Vêtements de soirée',
	    reference: 'Robe brodée froufrou',
        productSize: 'XS',
        price: 399.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe longue en deux parties, avec le haut brodé de passementeries, et le bas recouvert de froufrous en forme de rose.',
        productFit: 'regular',
	    composition:  "90% coton bio, 5% soie, 5% polyester.",
	    washingMaintenance:"Lavage à la main sur l’envers, blanchiment interdit, séchage suspendu à l’ombre, repassage doux sur l’envers, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_4.jpeg",
        photoTwo: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_4.jpeg",
        photoThree: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_4.jpeg",
        photoFour: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_4.jpeg",
        },

	    {id: 37,
        category: 'Vêtements de soirée',
	    reference: 'Robe en soie brodée',
        productSize: 'XS',
        price: 149.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe longue à bretelles en soie brodée.',
        productFit: 'regular',
	    composition:  '100% soie.',
	    washingMaintenance: "Lavage à la main sur l’envers, blanchiment interdit, séchage suspendu à l’ombre, repassage doux sur l’envers, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_5.jpeg",
        photoTwo: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_5.jpeg",
        photoThree: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_5.jpeg",
        photoFour: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_5.jpeg",
        },

	    {id: 38,
        category: 'Vêtements de soirée',
	    reference: 'Robe longue brodée à pétales',
        productSize: 'XS',
        price: 429.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe longue en mousseline, avec le haut brodé de passementeries et le bas de pétales de tissu, doublée sous la taille.',
        productFit: 'regular',
	    composition:  '46% coton bio, 23% Polyester, 17% viscose, 14% soie.',
	    washingMaintenance: "Nettoyage à sec uniquement.",
        photoOne: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_6.jpeg",
        photoTwo: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_6.jpeg",
        photoThree: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_6.jpeg",
        photoFour: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_6.jpeg",
        },

	    {id: 39,
        category: 'Vêtements de soirée',   
	    reference: 'Robe en soie dentelle brodée',
        productSize: 'XS',
        price: 199.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Robe longue sans manche en dentelle brodée,entièrement doublée.',
        productFit: 'regular',
	    composition: '56% coton bio, 23% Polyester, 11% soie.',
	    washingMaintenance: "Lavage à la main sur l’envers, blanchiment interdit, séchage suspendu à l’ombre, repassage doux sur l’envers, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_7.jpeg",
        photoTwo: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_7.jpeg",
        photoThree: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_7.jpeg",
        photoFour: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_7.jpeg",
        },

{
	    id: 40,
        category: 'Vêtements de soirée',
	    reference: 'Robe en soie imprimée',
        productSize: 'XS',
        price: 159.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: "Robe manche longue en crêpe de Chine imprimée, plissée sous l'encolure.",
        productFit: 'regular',
	    composition:  '100% soie.',
	    washingMaintenance: "Lavage à la main sur l’envers, blanchiment interdit, séchage suspendu à l’ombre, repassage doux sur l’envers, nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_8.jpeg",
        photoTwo: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_8.jpeg",
        photoThree: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_8.jpeg",
        photoFour: "assets/img/products-images/femme/vetements-de-soiree/robe_de_soiree_8.jpeg",
        },





    // MANTEAUX
    {
        id: 15,
        category: 'Manteaux',
        reference: 'Trench coat',
        productSize: 'S',
        price: 70.00,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        productFit: 'regular',
        composition: '100% coton éthique bio',
        washingMaintenance: "lavage délicat à la main, blanchiment interdit, séchage à plat uniquement, repassage à fer doux (1 point), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/manteaux/trench-coat-femme/pexels-lizzy-honey-14902218 - Grande.jpeg",
        photoTwo: "assets/img/products-images/femme/manteaux/trench-coat-femme/pexels-lizzy-honey-14902221 - Grande.jpeg",
        photoThree: "assets/img/products-images/femme/manteaux/trench-coat-femme/pexels-lizzy-honey-14902223 - Grande.jpeg",
        photoFour: "assets/img/products-images/femme/manteaux/trench-coat-femme/pexels-lizzy-honey-14902225 - Grande.jpeg",
    },
    {
        id: 16,
        category: 'Manteaux',
        reference: 'Veste',
        productSize: 'L',
        price: 65.00,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        productFit: 'regular',
        composition: '100% coton éthique bio',
        washingMaintenance: "lavage délicat à la main, blanchiment interdit, séchage à plat uniquement, repassage à fer doux (1 point), nettoyage à sec autorisé.",
        photoOne: "assets/img/products-images/femme/manteaux/veste-femme/Vestefleur.jpeg",
        photoTwo: "assets/img/products-images/femme/manteaux/veste-femme/trioVesteGrande.jpeg",
        photoThree: "assets/img/products-images/femme/manteaux/veste-femme/pexels-monstera-7691089 - Grande.jpeg",
        photoFour: "assets/img/products-images/femme/manteaux/veste-femme/duoveste.jpeg",
    },




]
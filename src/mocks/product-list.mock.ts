type ProductStatus = 'disponible' | 'disponible uniquement en magasin' | 'indisponible en ligne' | 'en réapprovisionnement' | 'épuisé';
type ProductSize = 'XS'|'S'|'M'|'L'|'XL'|'XXL';
type ProductFit = 'près du corps' | 'oversized' | 'loose' | 'regular';

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
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-vert/product1.png",
        photoTwo: "",
        photoThree: "",
        photoFour: "",

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
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-kaki/product2.png",
        photoTwo: "",
        photoThree: "",
        photoFour: "",

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
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_01.png",
        photoTwo: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_02.png",
        photoThree: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_03.png",
        photoFour: "/assets/img/products-images/femme/pull/pull-femme-blanc/pull_blanc_04.png",

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
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-bleu/product4.png",
        photoTwo: "",
        photoThree: "",
        photoFour: "",

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
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-bleu-clair/product5.png",
        photoTwo: "",
        photoThree: "",
        photoFour: "",

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
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-orange/product6.png",
        photoTwo: "",
        photoThree: "",
        photoFour: "",

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
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-arc-en-ciel/product7.png",
        photoTwo: "",
        photoThree: "",
        photoFour: "",

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
        photoOne: "/assets/img/products-images/femme/pull/pull-femme-blanc-2/product8.png",
        photoTwo: "",
        photoThree: "",
        photoFour: "",

    },

    // ROBES
    {
        id: 9,
        category: "Robes",
        reference: 'Robe bleue',
        productSize: 'XS',
        price: 100,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Lorem blablablabla',
        productFit: 'regular',
        composition: '100% angora éthique',
        washingMaintenance: "lavage délicat à la main, blanchiment interdit, séchage à plat uniquement, repassage à fer doux (1 point), nettoyage à sec autorisé.",
        photoOne: "",
        photoTwo: "",
        photoThree: "",
        photoFour: "",

    }



]
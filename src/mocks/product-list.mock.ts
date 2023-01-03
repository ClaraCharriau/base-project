type productStatus = 'disponible' | 'disponible uniquement en magasin' | 'indisponible en ligne' | 'en réapprovisionnement' | 'épuisé';
type productSize = 'XS'|'S'|'M'|'L'|'XL'|'XXL';
type productFit = 'près du corps' | 'oversized' | 'loose' | 'regular';

export interface Product {
    id: string;
    category: string;
    reference: string;
    productSize: string;
    price: number;
    productStatus: string;
    isAvailable: boolean;
    description: string;
    productFit: string;
    composition: string;
    washingMaintenance: string;
}

// saison: 1 hiver/automne, 2 printemps/été
// puis 22 (2022)
// P (Pull), J (veste), S (jupe)..
// +(pré)nom du design

export const PRODUCTLIST: Product[] = [



    // PULLS
    {
        id: '122PIPA',
        category: "pull",
        reference: 'Pull torsade chiné',
        productSize: 'XS',
        price: 69.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull avec torsade en grossse maille chinée avec col rond. Pièce chaude de plein hiver.',
        productFit: 'oversized',
        composition: '80% laine, 10% polyester recyclé, 10% polyamide',
        washingMaintenance: "lavage délicat à 30◦, blanchiment interdit, séchage à plat uniquement, repassage doux sur l'envers, nettoyage à sec autorisé."

    },
    {
        id: '222PATTI',
        category: "pull",
        reference: 'Pull chaussette',
        productSize: 'XS',
        price: 39.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull chaussette en maille fine près du corps pour toutes saisons.',
        productFit: 'près du corps',
        composition: '92% polyester recyclé, 8% élasthanne',
        washingMaintenance: "lavage à 30◦, blanchiment interdit, séchage en tambour cycle normal, repassage doux sur l'envers, nettoyage à sec autorisé."

    },
    {
        id: '222CLARA',
        category: "pull",
        reference: 'Gilet oversized en 100% coton bio',
        productSize: 'XS',
        price: 59.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Cardigan ample et court en grosses côtes.',
        productFit: 'oversized',
        composition: '100% coton bio',
        washingMaintenance: "lavage à 40◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé."

    },
    {
        id: '122PLUME',
        category: "pull",
        reference: 'Pull maille fine chiné',
        productSize: 'XS',
        price: 29.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull col montant en maille légère chinée.',
        productFit: 'regular',
        composition: '100% coton recyclé',
        washingMaintenance: "lavage à 40◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé."

    },
    {
        id: '122PIA',
        category: "pull",
        reference: 'Pull en côte anglaise',
        productSize: 'XS',
        price: 79.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull col rond en côte anglaise grosse jauge.',
        productFit: 'regular',
        composition: '90% coton bio, 10% cachemire',
        washingMaintenance: "lavage à la main, blanchiment interdit, séchage suspendu à l'ombre, repassage à fer doux (1 point), nettoyage à sec recommandé."

    },
    {
        id: '122PARIS',
        category: "pull",
        reference: 'Pull en jeux de maille',
        productSize: 'XS',
        price: 79.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull col rond en jeux de mailles diminuées.',
        productFit: 'oversized',
        composition: '100% coton bio',
        washingMaintenance: "lavage délicat à 30◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé."

    },
    {
        id: '222PRUNE',
        category: "pull",
        reference: 'Pull rayé multicolore',
        productSize: 'XS',
        price: 59.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull col rond multicolore en maille perlée.',
        productFit: 'oversized',
        composition: '50% coton, 50% lin',
        washingMaintenance: "lavage délicat à 40◦, blanchiment interdit, séchage suspendu à l'ombre, repassage à température moyenne (2 points), nettoyage à sec autorisé."

    },
    {
        id: '122PAULINE',
        category: "pull",
        reference: 'Pull angora ajouré',
        productSize: 'XS',
        price: 89.90,
        productStatus: 'disponible',
        isAvailable: true,
        description: 'Pull angora avec détails ajourés sur les manches.',
        productFit: 'regular',
        composition: '100% angora éthique',
        washingMaintenance: "lavage délicat à la main, blanchiment interdit, séchage à plat uniquement, repassage à fer doux (1 point), nettoyage à sec autorisé."

    }



]
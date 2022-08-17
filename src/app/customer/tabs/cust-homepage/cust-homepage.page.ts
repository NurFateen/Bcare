import { AfterContentChecked, Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectFade, Pagination, Swiper, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade]);


@Component({
  selector: 'app-cust-homepage',
  templateUrl: './cust-homepage.page.html',
  styleUrls: ['./cust-homepage.page.scss'],
})
export class CustHomepagePage implements OnInit, AfterContentChecked {
  swiperA: SwiperOptions={
    pagination:true,
    slidesPerView: 'auto',
  };
  config: SwiperOptions;
  config1: SwiperOptions;
  categories: any[] = [];
  products: any[] = [];

  constructor() { }

  ngOnInit() {
    Swiper.use([Pagination]);
    
    this.categories = [      
      {
        id:1,
        name: 'Mask',
        image: 'assets/category/facial-mask.png',
        
      },
      {
        id:2,
        name: 'Serum',
        image: 'assets/category/serum.png',
      },
      {
        id:3,
        name: 'Eye Cream',
        image: 'assets/category/eyecream.png',
      },
      {
        id:4,
        name: 'Toner',
        image: 'assets/category/toner.png',
      },
      {
        id:5,
        name: 'Exfoliator',
        image: 'assets/category/body-scrub.png',
      },
      {
        id:6,
        name: 'Sunscreen',
        image: 'assets/category/sunscreen.png',
      },
      {
        id:7,
        name: 'Moisturizer',
        image: 'assets/category/moisturizer.png',
      },
    ];

    this.products = [      
      {
        id: 1,
        name: 'SOME BY MI - Propolis B5 Glow Barrier Calming Mask',
        category:'Mask',
        price: 19,
        skintype: 'Sensitive',
        description: 'Towel dry after cleansing. Apply to the face and neck area and leave in for 5-10 minutes. Rise thoroughly.',
        ingredient: 'Propolis Extract(56 %),Diglycerin, Honey Extract, 1,2-Hexanediol Centella Asiatica Extract,Decyl Glucoside, Melaleuca Alternifolia (Tea Tree) Leaf Water, Panthenol, Honey, Royal Jelly Extract, Chamomilla Recutita (Matricaria) Flower, Rosa Centifolia Flower, Pollen Extract, Beeswax, Artemisia Princeps Leaf Extract, Centella Asiatica Leaf Extract, Madecassoside, Madecassic Acid, Asiaticoside, Asiatic Acid, Ceramide NP, Sodium Hyaluronate, Malt Extract, Coptis Japonica Extract, Butylene Glycol, Glycerin, Polyglycerin-3, Arginine, Carbomer, Aqua, Benzyl Glycol, Ethylhexylglycerin, Parfum',
        image: 'assets/product/p1.jpg',
        liked: true,
      },
      {
        id: 2,
        name: 'SOME BY MI - Yuja Niacin Brightening Sleeping Mask',
        category: 'Mask',
        price: 19,
        skintype: 'Combination, Sensitive',
        description: 'After cleansing, apply and spread evenly on face as last step of basic skincare routine at night.  Avoid eye and lips areas. Wash your face the next morning. For more intensive skin care, just add another layer to create double glowing effect.',
        ingredient: 'Citrus Junos Fruit Extract, Water, Butylene Glycol, Niacinamide, Glycerin, Panthenol, 1,2-Hexanediol, Simmondsia Chinensis Seed Oil, Thuja Orientalis Leaf Extract, Zanthoxylum Schinifolium Leaf Extract, Polygonum Cuspidatum root Extract, Mentha Piperita leaf Extract, Mentha Aquatica Leaf Extract, Mentha Rotundifolia Leaf Extract, nelumbo Nucifera Flower Extract, Coptis Japonica Extract, Hippophae Rhamnoides Fruit Extract, Arbutin, Glutathione, Ascorbic Acid, Ascorbyl Glucoside, Biotin, Tocopherol, Cyanocobalamin, Alpha-bisabolol, Ascorbyl Tetraisopalmitate, Menadione, Arginine, Trehalose, Madecassoside, Aenoside, Diphenylsiloxy Phenyl Trimethicone, Caprylyl Methicone, Inulin Lauryl Carbamate, Behenyl Alcohol, Sorbitan Oleate, Sorbitan Isostearate, Caprylyl/ Capryl Glucoside, Polyisobutene, Xanthan Gum, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Dimethicone/ Phenyl Vinyl Dimethicone Crosspolymer, Benzyl Glycol, Ethylhexylglycerin, Raspberry Ketone, Disodium EDTA, Citrus Junos Peel Oil',
        image: 'assets/product/p2.jpg',
        liked: true,
      },
      {
        id: 3,
        name: 'PYUNKANG YUL - Calming Low pH Foaming Cleanser',
        category: 'Cleanser',
        price: 17,
        skintype: 'Normal, Combination, Sensitive',
        description: 'Dispense a moderate amount on the palm of hand and apply on damp skin. Rinse off thoroughly with lukewarm water.',
        ingredient: 'Aqua, Dipropylene Glycol, Disodium Laureth Sulfosuccinate, Disodium Cocoyl Glutamate, Coco-Glucoside, Polyglyceryl-10 Myristate, Camellia Japonica Flower Extract, Centella Asiatica Extract, Sodium Hyaluronate, Lonicera Japonica (Honeysuckle) Flower Extract, Melaleuca Alternifolia (Tea Tree) Leaf Extract, Salvia Officinalis Leaf Extract, Caprylic/Capric Triglyceride, Cetyl Ethylhexanoate, Ethylhexyl Palmitate, Hydrolyzed Hyaluronic Acid, Hydroxypropyltrimonium Hyaluronate, Sodium Hyaluronate Crosspolymer, Sodium Acetylated Hyaluronate, Madecassoside, Madecassic Acid, Asiaticoside, Asiatic Acid, Butylene Glycol, Citric Acid, Caprylyl Glycol, Hydroxyacetophenone, Morinda Citrifolia Seed Oil, Salix Alba Bark Extract, Polyquaternium-67, Propanediol, Ethylhexylglycerin, Disodium EDTA, 1,2 Hexanediol',
        image: 'assets/product/p3.jpg',
        liked: true,
      },
      {
        id: 4,
        name: 'ROUND LAB - 1025 Dokdo Toner',
        category: 'Toner',
        skintype: 'Oily',
        price: 24,
        description: 'After cleansing, dispense a proper amount to cotton pad and gently wipe across facial area along the skin texture. Or fully soak cotton pad with the toner and apply onto irritated area as a soothing pack.',
        ingredient: 'Aqua, Butylene Glycol, Glycerin, Pentylene Glycol, Propanediol, Chondrus Crispus (Irish Moss) Extract, Saccharum Officinarum (Sugar Cane) Extract, Sea Water, 1,2-Hexanediol, Protease, Betaine, Panthenol, Ethylhexylglycerin, Allantoin, Xanthan Gum, Disodium EDTA.',
        image: 'assets/product/p4.jpg',
        liked: false,
      },
      {
        id: 5,
        name: 'Nature Republic Aloe Vera',
        category: 'Moisturizer',
        price: 8,
        skintype: 'Oily, Normal',
        description: 'Apply an appropriate amount to dry, sensitive parts of face, body and hair. For hair use, be sure to use on damp or towel dried hair for best results',
        ingredient: 'Aloe vera leaf extract (92%), Ethanol, Glyceryl polyacrylate, Dipropylene Glycol, Butylene Glycol, Glycerin, Propylene Glycol, 1,2-Hexanediol, Polyglutamic Acid, Betaine, Sodium Hyaluronate, Karen Dulcis Extract, Spearmint Extract, Lemon Balm Extract, Carbomer, Phage-60 Hydrogenated Castor Oil, Triethanolamine, Phenoxyethanol, Purified water, Disodium EDTA',
        image: 'assets/product/p5.jpg',
        liked: false,
      }
    ];
  }
  
  ngAfterContentChecked() {
    this.config = {
      slidesPerView: 2.1
    };
    this.config1 = {
      slidesPerView: 2
    };
  }

}


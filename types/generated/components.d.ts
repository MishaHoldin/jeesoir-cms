import type { Schema, Struct } from '@strapi/strapi';

export interface BannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    btnLink: Schema.Attribute.Text;
    btnText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ItemBlockItemBlock extends Struct.ComponentSchema {
  collectionName: 'components_item_block_item_blocks';
  info: {
    displayName: 'item-block';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SwiperItemsSwiperItems extends Struct.ComponentSchema {
  collectionName: 'components_swiper_items_swiper_items';
  info: {
    displayName: 'swiper-items';
  };
  attributes: {
    btnLink: Schema.Attribute.Text;
    btnText: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.banner': BannerBanner;
      'item-block.item-block': ItemBlockItemBlock;
      'swiper-items.swiper-items': SwiperItemsSwiperItems;
    }
  }
}

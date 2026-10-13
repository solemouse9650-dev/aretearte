// Íconos de Material Symbols que usa la web. La fuente se descarga recortada a
// SOLO estos íconos (mucho más liviana). Debe coincidir con la lista del panel
// (arete-admin/panel/src/lib/icons.ts) + los íconos de interfaz.
export const CONTENT_ICONS = [
  'add', 'air', 'aspect_ratio', 'auto_awesome', 'brush', 'category', 'celebration', 'chat',
  'check_circle', 'child_care', 'diamond', 'eco', 'emoji_objects', 'favorite', 'fingerprint',
  'forum', 'front_hand', 'handyman', 'help', 'home', 'inventory_2', 'key', 'layers',
  'light_mode', 'local_fire_department', 'local_florist', 'local_mall', 'local_shipping',
  'location_on', 'mail', 'package_2', 'palette', 'park', 'payments', 'photo_camera', 'redeem',
  'restaurant', 'sanitizer', 'schedule', 'sell', 'shield_with_heart', 'spa', 'star',
  'storefront', 'straighten', 'support_agent', 'table_restaurant', 'tune', 'verified',
  'water_drop', 'workspace_premium',
];

export const UI_ICONS = [
  'arrow_back', 'arrow_downward', 'arrow_forward', 'chevron_left', 'chevron_right', 'close',
  'delete', 'east', 'expand_more', 'info', 'lock', 'menu', 'public', 'remove', 'search', 'send',
  'zoom_in', 'shopping_bag', 'filter_alt_off', 'inventory',
];

export const ALL_ICONS = [...new Set([...CONTENT_ICONS, ...UI_ICONS])].sort();

export const isIcon = (name) => typeof name === 'string' && CONTENT_ICONS.includes(name);

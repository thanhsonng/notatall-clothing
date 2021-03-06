/* eslint-disable react/jsx-filename-extension, max-len */

import ReactDOMServer from 'react-dom/server';

export function getCartTotal(cart) {
  const vnd = cart.reduce((acc, entry) => acc + entry.product.priceVnd * entry.quantity, 0);
  const usd = cart.reduce((acc, entry) => acc + entry.product.priceUsd * entry.quantity, 0);
  return [vnd, usd];
}

export function getCartQuantity(cart) {
  return cart.reduce((acc, entry) => acc + entry.quantity, 0);
}

export const countryList = [
  'Afghanistan',
  'Åland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo, The Democratic Republic of The',
  'Cook Islands',
  'Costa Rica',
  'Cote D\'ivoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-bissau',
  'Guyana',
  'Haiti',
  'Heard Island and Mcdonald Islands',
  'Holy See (Vatican City State)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran, Islamic Republic of',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, Democratic People\'s Republic of',
  'Korea, Republic of',
  'Kuwait',
  'Kyrgyzstan',
  'Lao People\'s Democratic Republic',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libyan Arab Jamahiriya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia, The Former Yugoslav Republic of',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova, Republic of',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian Territory, Occupied',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Pierre and Miquelon',
  'Saint Vincent and The Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and The South Sandwich Islands',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan, Province of China',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Virgin Islands, British',
  'Virgin Islands, U.S.',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

export function checkoutInfoValid(info) {
  if (!info.firstName) return false;
  if (!info.lastName) return false;
  if (!info.email) return false;
  if (!info.phone) return false;
  if (!info.country) return false;
  if (!info.city) return false;
  if (info.country === 'Vietnam' && !info.district) return false;
  if (!info.zipCode) return false;
  if (!info.address) return false;
  return true;
}

export function cartValid(cart) {
  return cart.length > 0;
}

export function canAddMore(product, sizeName, cart) {
  const maxPerEntry = 5;

  if (!sizeName) return false;

  const sizeInfoFromServer = product.sizes.find((size) => size.name === sizeName);
  if (!sizeInfoFromServer) return false;

  const entry = cart.find((e) => e.product.id === product.id && e.sizeName === sizeName);
  if (!entry) return true;

  const limit = Math.min(sizeInfoFromServer.quantity, maxPerEntry);
  return entry.quantity < limit;
}

export function buildFlashFromInvalidStockEntries(entries) {
  const exceeded = entries.filter((entry) => entry.stockExceedance > 0);

  return [ReactDOMServer.renderToStaticMarkup(
    <div>
      <div>
        The following items in your cart exceed our stock. Please choose a different quantity or remove it from your cart:
        <ul style={{ marginTop: '0.5em' }}>
          {exceeded.map((entry) => {
            const leftInStock = entry.quantity - entry.stockExceedance;
            return (
              <li key={entry.product.id + entry.sizeName}>
                {entry.product.name.toUpperCase()} ({entry.sizeName}): {leftInStock ? `only ${leftInStock} in stock` : 'out of stock'}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        Những sản phẩm sau vượt quá số lượng hàng còn lại trong kho. Vui lòng chọn lại số lượng hoặc xoá khỏi giỏ hàng của bạn:
        <ul style={{ marginTop: '0.5em' }}>
          {exceeded.map((entry) => {
            const leftInStock = entry.quantity - entry.stockExceedance;
            return (
              <li key={entry.product.id + entry.sizeName}>
                {entry.product.name.toUpperCase()} ({entry.sizeName}): {leftInStock ? `còn ${leftInStock} chiếc` : 'hết hàng'}
              </li>
            );
          })}
        </ul>
      </div>
    </div>,
  )];
}

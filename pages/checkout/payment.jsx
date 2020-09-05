import Router from 'next/router';
import Head from 'next/head';
import { cartValid, checkoutInfoValid } from 'utils/checkout';
import { useCart, useCheckoutInfo } from 'hooks/store';
import Layout from 'components/layout';
import LocalCheckout from 'components/checkout/local-checkout';
import WorldwideCheckout from 'components/checkout/worldwide-checkout';

function CheckoutPaymentPage() {
  const cart = useCart();
  const checkoutInfo = useCheckoutInfo();

  if (!cartValid(cart)) {
    Router.replace('/checkout/summary');
    return null;
  }

  if (!checkoutInfoValid(checkoutInfo)) {
    Router.replace('/checkout/shipping');
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>Payment – Checkout – Fustic Store</title>
        <link rel="canonical" href={`${window.location.origin}/checkout/payment`} />
        <meta name="description" content="Checkout payment on Fustic. Store" />
        <meta name="keywords" content="fustic store,fustic studio,checkout,payment" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fustic. Store" />
        <meta property="og:url" content={`${window.location.origin}/checkout/payment`} />
        <meta property="og:title" content="Payment – Checkout – Fustic Store" />
        <meta property="og:description" content="Checkout payment on Fustic. Store" />
        <meta property="og:image" content={`${window.location.origin}/fustic-white.png`} />
      </Head>

      <div className="checkout-payment-page">
        {checkoutInfo.country === 'Vietnam'
          ? <LocalCheckout />
          : <WorldwideCheckout />}
      </div>

      <style jsx>
        {`
        .checkout-payment-page {
          padding: 6rem 0 4rem;

          @media screen and (min-width: 768px) {
            padding-top: 10rem;
          }

          @media screen and (min-width: 1200px) {
            padding-top: 12rem;
          }
        }
        `}
      </style>
    </Layout>
  );
}

export default CheckoutPaymentPage;
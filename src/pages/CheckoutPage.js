import Layout from '../components/layout/Layout';
import Checkout from '../components/checkout/Checkout';

const CheckoutPage = () => {
	return (
		<Layout>
			<section className="container-lg bg-light p-5">
				<h2 className="text-uppercase">Checkout</h2>
			</section>
			<Checkout />
		</Layout>
	);
};

export default CheckoutPage;

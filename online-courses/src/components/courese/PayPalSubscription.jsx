import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Loader, CheckCircle, AlertCircle } from 'lucide-react';

const PayPalSubscription = ({ onSubscriptionSuccess, userEmail, planType }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const paypalOptions = {
    'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID || 'YOUR_CLIENT_ID',
    currency: 'USD',
    intent: 'subscription',
    vault: true,
  };

  const monthlyPlan = {
    plan_id: 'P-XXXXXXXXXXXXXXXXXXXXXXXXX',
    name: 'KelBiL ئايلىق ئەزا',
    description: 'بىر ئاي ئۈچۈن تولۇق دەرسلەر زىيارەت ھوقۇقى',
    price: '9.99'
  };

  const yearlyPlan = {
    plan_id: 'P-XXXXXXXXXXXXXXXXXXXXXXXXX',
    name: 'KelBiL يىللىق ئەزا',
    description: 'بىر يىل ئۈچۈن تولۇق دەرسلەر زىيارەت ھوقۇقى',
    price: '99.99'
  };

  const selectedPlan = planType === 'yearly' ? yearlyPlan : monthlyPlan;

  const createOrder = (data, actions) => {
    return actions.subscription.create({
      plan_id: selectedPlan.plan_id,
      application_context: {
        brand_name: 'KelBiL توردەرس',
        locale: 'en-US',
        shipping_preference: 'NO_SHIPPING',
        user_action: 'SUBSCRIBE_NOW',
      },
    });
  };

  const onApprove = async (data, actions) => {
    setLoading(true);
    try {
      const details = await actions.subscription.get();
      
      const subscriptionData = {
        subscriptionID: data.subscriptionID,
        status: details.status,
        planID: details.plan_id,
        startTime: details.start_time,
        payerEmail: details.subscriber.email_address,
        userEmail: userEmail,
        planType: planType,
        amount: selectedPlan.price,
        access: 'full',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + (planType === 'yearly' ? 365 : 30) * 24 * 60 * 60 * 1000).toISOString(),
      };

      localStorage.setItem('userSubscription', JSON.stringify(subscriptionData));
      localStorage.setItem('isSubscribed', 'true');

      setSuccess(true);
      setLoading(false);

      if (onSubscriptionSuccess) {
        onSubscriptionSuccess(subscriptionData);
      }
    } catch (err) {
      setError('تىنچلىشىش جەريانىدا خاتالىق كۆرۈلدى');
      setLoading(false);
      console.error(err);
    }
  };

  const onError = (err) => {
    setError("پۇل تۆلەش جەريانىدا خاتالىق كۆرۈلدى. قايتا سىناڭ.");
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <Loader className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-gray-600 dark:text-gray-300">پۇل تۆلەش جەريانىدا...</p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          مۇۋەپپەقىيەت!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          تىنچلىشىشىڭىز مۇۋەپپەقىيەتلىك ئامالغا ئاشۇرۇلدى. ھازىر بارلىق دەرسلەرنى كۆرەلەيسىز!
        </p>
        <button
          onClick={() => window.location.href = '/courses'}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
        >
          دەرسلەرگە قايتىش
        </button>
      </div>
    );
  }

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div className="space-y-6">
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {selectedPlan.name}
            </h4>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              ${selectedPlan.price}
              <span className="text-lg text-gray-600 dark:text-gray-400">
                {planType === 'yearly' ? '/ يىل' : '/ ئاي'}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedPlan.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">بارلىق دەرسلەر</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">ھەممە ۋىديولار</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">يېڭى دەرسلەر</span>
            </div>
            {planType === 'yearly' && (
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">ئالاھىدە ماتېرىياللار</span>
              </div>
            )}
          </div>
        </div>

        <div className="py-4">
          <PayPalButtons
            style={{
              layout: 'vertical',
              color: 'blue',
              shape: 'rect',
              label: 'subscribe',
              height: 48,
            }}
            createSubscription={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 space-y-2">
          <p>🔒 بىخەتەر پۇل تۆلەش - PayPal بىلەن قوغدىلىدۇ</p>
          <p>كېيىن ھەر ۋاقىت ئەزا بولۇشىڭىزنى بىكار قىلالايسىز</p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <img src="/images/paypal-secure.png" alt="PayPal Secure" className="h-8" />
            <img src="/images/ssl-secure.png" alt="SSL Secure" className="h-8" />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalSubscription;
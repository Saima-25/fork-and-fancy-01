
export default async function FAQ(){
    await new Promise((resolve)=> {
    setTimeout(resolve,4000);
  });
   
    return (
      <div className="bg-slate-200">
        <h1 className="font-bold text-blue-800 pt-1 pb-2 text-center text-4xl font-bold">Frequently Asked Questions</h1>
        <h2 className='font-sans-serif italic text-purple-900  font-bold p-4'>Q: What is your return policy?</h2>
  
        <p className='font-sans-serif italic text-blue-900 font-bold p-4'>
          We offer a 30-day return policy. If you're not satisfied with your
          purchase, you can return it within 30 days for a full refund.
        </p>
  
        <h2 className='font-sans-serif italic text-purple-900  font-bold p-4'>Q: How do I track my order?</h2>
  
        <p className='font-sans-serif italic text-blue-900  font-bold p-4'>
          You can track your order by logging into your account and clicking on
          the "Order History" tab.
        </p>
  
        <h2 className='font-sans-serif italic text-purple-900  font-bold p-4'>Q: What forms of payment do you accept?</h2>
  
        <p className='font-sans-serif italic text-blue-900 font-bold p-4'>We accept Visa, Mastercard, American Express, and PayPal.</p>
  
        <h2 className='font-sans-serif italic text-purple-900  font-bold p-4'>Q: How do I cancel my order?</h2>
  
        <p className='font-sans-serif italic text-blue-900 font-bold p-4'>Please contact our customer service team to cancel your order.</p>
      </div>
    );
  }
  
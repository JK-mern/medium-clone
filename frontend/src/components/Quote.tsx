function Quote() {
  return (
    <div className="bg-slate-100 h-screen  flex flex-col justify-center invisible lg:visible">
      <div className="flex  flex-col justify-center items-center">
        <div className="w-4/6  flex  flex-col">
          <p className="text-left text-3xl font-semibold ">
            "The customer service i recieved was exceptional . The suport team
            went above and beyond to address my concerns."
          </p>
          <div className="flex flex-col  items-start self-start mt-2 ">
            <h4 className="font-semibold  text-lg">Jules Winnfield</h4>
            <p className="text-gray-500  text-md font-medium">CEO,Acme Inc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;

const ProductForm = () => {
  return (
    <form className="max-w-5xl mx-auto flex items-start justify-between h-full mt-8">
      <div className="flex flex-col w-full h-full mx-4">
        <div className="mb-5">
          <label>Ürün Adı</label>
          <input className="form-input" />
        </div>
        <div className="mb-5">
          <label>Ürün Açıklaması</label>
          <textarea className="form-textarea" />
        </div>
        <div className="mb-5">
          <label>Ürün Fiyatı</label>
          <input className="form-input w-40" />
        </div>
        <div className="mb-5">
          <label>Ürün Adedi</label>
          <input type="number" defaultValue={"1"} className="form-input w-20" />
        </div>
      </div>
      <div className="flex flex-col w-full h-full mx-4">
        <div className="mb-5">
          <label>Ürün Satıcısı</label>
          <input className="form-input" />
        </div>
        <div className="mb-5">
          <label  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">Ürün Fotoğrafları</label>
          <input  id="file-upload" name="file-upload" type="file" className="sr-only" />
        </div>
        <div className="mb-5">
          <label>Ürün Kategorisi</label>
          <select className="form-input" />
        </div>
        <div className="mb-5">
          <label>Ürünün Dahil Olduğu Kampanya</label>
          <select className="form-select" />
        </div>
        <div className="self-start">
          <button className="btn btn-success">Kaydet</button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;

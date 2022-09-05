
export default function footerComponent() {
  return (
    <>
    <footer className="main_footer">

        <div className="flex_box">
            <div className="flex_item">
                <h2>Barbers</h2>
            </div>
            <div className="flex_item">
                <span>+63 917 683 5431 - 02 8 351 5649</span>
            </div>
            <div className="flex_item">
                <span>Ramdp, address preferrably in BGC, Makati CBD Villages, Ortigas, Nuvali, Araneta Center, etc. Metro,
                    Philippines</span>
            </div>
            <div className="flex_item">
                <a href="#"><button className="btn-ecl"><i className="bi bi-instagram"></i></button></a>
                <a href="#"><button className="btn-ecl"><i className="bi bi-twitter"></i></button></a>
                <a href="#"><button className="btn-ecl"><i className="bi bi-facebook"></i></button></a>
            </div>
        </div>
    </footer>
    </>

  );
}
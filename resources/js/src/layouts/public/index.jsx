import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";

function PublicLayout({ children }){
    return (
        <>
        <main>
            <Header />
            {children}
            <Footer />
        </main>
        </>
    )
}

export default PublicLayout;
import '../styles/Footer.css';

export default function Footer(){
    return (
        <>
            <footer className="container-footer">
                <p className='footer'>&copy; {new Date().getFullYear()} JEM Soluções Digitais. Todos os direitos reservados.</p>
            </footer>
        </>
    )
}

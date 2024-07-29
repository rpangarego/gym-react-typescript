import Logo from '@/assets/Logo.png'

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet eveniet suscipit, ipsa cupiditate ut possimus
                        dignissimos repellat dolorum libero aspernatur.
                    </p>
                    <p>&copy; Copyright Evolve All Right Reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">adipisicing elit delectus</p>
                    <p className="my-5">cupiditate ut</p>
                    <p className="my-5">possimus dolorum.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">eveniet suscipit</p>
                    <p className="my-5">libero aspernatur</p>
                    <p>(132)8932-349</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

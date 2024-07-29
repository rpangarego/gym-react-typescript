import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from '@heroicons/react/16/solid'
import { SelectedPage } from '@/shared/types'
import { motion, stagger } from 'framer-motion'
import HText from '@/shared/HText'
import { BenefitType } from '@/shared/types'
import Benefit from '@/shared/Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Art Facilities',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit rerum blanditiis adipisci eum',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            'Cupiditate non omnis voluptatum aut ipsum autem esse ratione quam soluta, provident consequuntur aliquid ducimus expedita, nemo officiis?',
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Expert and Pro Trainers',
        description:
            'Consectetur adipisicing elit. Dolorem quaerat mollitia dolorum. Cupiditate non omnis voluptatum aut ipsum autem esse ratione quam soluta.',
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* header */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Autem, adipisci error? Ratione quam eum voluptatum
                        natus amet odit tempora quis architecto ut adipisci. Est
                        atque aspernatur quibusdam voluptatem placeat velit!
                    </p>
                </motion.div>

                {/* benefits */}
                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* graphics and description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* graphic */}
                    <img
                        src={BenefitsPageGraphic}
                        alt="benefit-page-alt"
                        className="mx-auto"
                    />
                    {/* description */}
                    <div>
                        {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{' '}
                                        <span className="text-primary-500">
                                            FIT
                                        </span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Hic maxime quidem eos nemo id.
                                Repudiandae, consectetur! Voluptatum quisquam
                                neque hic animi, doloribus eveniet totam, dolore
                                ut assumenda id sunt consequatur?
                            </p>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Debitis eum, animi adipisci
                                suscipit recusandae soluta id minima,
                                dignissimos, assumenda ipsam dolorum quis vero
                                iusto maxime cupiditate nostrum quia dolores
                                similique.
                            </p>
                        </motion.div>
                        {/* button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits

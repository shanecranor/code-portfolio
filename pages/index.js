
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import BigTitle from '../components/BigTitle/BigTitle';
import LanguagesAndProjects from '../components/LanguagesAndProjects/LanguagesAndProjects';
import About from '../components/About/About';
import Section from '../components/Section/Section';
import FeaturedProject from '../components/FeaturedProject/FeaturedProject';
import Link from 'next/dist/client/link';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import { projects } from '../constants/projects'
import { useState } from 'react';
import Router, { useRouter } from "next/router";
export default function Home() {
    const { query } = useRouter();
    const project = query.project;
    return (<>
        <Head>
            <title>Interactive Code Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {project &&
            (<ModalWindow
                selectedProject={{ ...projects[project], index: parseInt(project) }}
                setProject={(next) => {
                    Router.push(
                        { query: { project: next } },
                        undefined,
                        { shallow: true }
                    )
                }}
            />
            )}
        <div className={'page ' + (project && 'modal-blur')}>
            <header>
                <Navbar />
            </header>
            <main>
                <BigTitle text="Code Portfolio" />
                {/* <About/> */}
                <Section header="Featured Projects" startOpen={true}>
                    <Link href="./posts/spotify"><a style={{ all: "unset" }}>
                        <FeaturedProject
                            title="Truffle Spotify App"
                            description="Overlay that displays cached Spotify data from a Cloudlare worker"
                        /></a>
                    </Link>
                    <FeaturedProject
                        title="Math Synth Experiment"
                        description="Create a wall of sound by writing equations"
                    />
                    <FeaturedProject
                        title="Bubblz.Space"
                        description="A peer to peer video communication web app with a twist"
                    />
                </Section>
                <Section header="All Projects">
                    <LanguagesAndProjects />
                </Section>
            </main>
        </div>
    </>
    )
}
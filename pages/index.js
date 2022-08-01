
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import BigTitle from '../components/BigTitle/BigTitle';
import LanguagesAndProjects from '../components/LanguagesAndProjects/LanguagesAndProjects';
import About from '../components/About/About';
import Section from '../components/Section/Section';
import FeaturedProject from '../components/FeaturedProject/FeaturedProject';
import Link from 'next/dist/client/link';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import { projects, getProjectsByLanguages, getProjectsByTag } from '../constants/projects'
import { categories, getLangsByCategory } from '../constants/languages.ts'
import { useState } from 'react';
import Router, { useRouter } from "next/router";
export default function Home() {
    const { query } = useRouter();
    const project = query.project;
    const category = query.category || "All";
    const selectedProjects = getProjectsByTag(category)
    const projectProps = selectedProjects[project]
    return (<>
        <Head>
            <title>Interactive Code Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {(project && projectProps) &&
            (<ModalWindow
                selectedProject={{ ...projectProps, index: parseInt(project) }}
                setProject={(next) => {
                    Router.push(
                        { query: { ...query, project: next } },
                        undefined,
                        { shallow: true }
                    )
                }}
                maxProject={selectedProjects.length}
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
                    <Link href="./posts/synth"><a style={{ all: "unset" }}>
                    <FeaturedProject
                        title="Math Synth Experiment"
                        description="Create a wall of sound by writing equations"
                    /></a>
                     </Link>
                    <FeaturedProject
                        title="Bubblz.Space"
                        description="A peer to peer video communication web app with a twist"
                    />
                </Section>
                <Section header="All Projects" startOpen={true}>
                    <LanguagesAndProjects />
                </Section>
            </main>
        </div>
    </>
    )
}
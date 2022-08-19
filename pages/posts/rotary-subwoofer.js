import Link from 'next/link';
import Head from 'next/head'

// import './app.scss'
// import './components/style_modules/scrollbar.scss'
import Navbar from '../../components/Navbar/Navbar';
import Section from '../../components/Section/Section';
// import './components/Navbar.scss' 
import BigTitle from '../../components/BigTitle/BigTitle';
export default function RotarySubwoofer(){
    return (
    <>
        <Head>
            <title>Rotary Subwoofer Build</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar/>
        </header>
        <main className='post'>
            <header><h1>Building a Rotary Subwoofer</h1>
            <h2>High amplitude ultra low frequency loudspeaker</h2></header>
			<section className='text-section'>
                <header><h2>Why Build a Rotary Subwoofer</h2></header>
                <p>
				Subwoofers are sound reproduction devices that typically play frequencies from ~20 Hz to 200 Hz. Producing high amplitude sound below 20 Hz with a traditional sub requires thousands of watts and multiple expensive drivers. You can only move an 8-to-18-inch speaker cone so far without running into the physical excursion limit. Increasing cone diameter will increase the volume of air being moved, but also requires an exponential increase in power, bigger magnets, and more expensive components. To overcome these problems, you can take advantage of a unique speaker design.
<br/><br/>
				A rotary 'subwoofer' consists of a fan with variable pitch blades mounted to a powerful motor. By increasing the speed of the motor, there should be a linear increase in volume, bypassing the inherent physical contraints found in a normal subwoofer. The frequency played by the subwoofer is controlled by the speed at which the variable pitch blades are actuated. Oscillating between pushing air and pressurizing the room to pulling air and depressurizing the room has the same effect moving the speaker cone forwards and backwards in a typical loudspeaker. 
				</p>
            </section>
			<section className='text-section'>
                <header><h2>Problems With Rotary Subwoofers</h2></header>
                <p>
				Rotary subwoofers only make sense at incredibly low frequencies. Anything above 20Hz becomes more difficult to accurately reproducing through a rotary sub. They also require a large empty space (or maybe a window... further testing is required here) and baffle to be used akin to a traditional subwoofer in a box.
				</p>
            </section>
            <section className='text-section'>
                <header><h2>Project Goals</h2></header>
                <p>
					I constructed this subwoofer for an open ended Mechatronics final project, but mostly because I had seen designs and implementations online and have always wanted to try to replicate them. The only hard requirements were to have some sort of input and output, to use some kind of embedded programming, and to use a PID feedback loop.
                </p>
            </section>
            <section className='text-section'>
                <header><h2>Parts List</h2></header>
                <p>
                    <img src="/assets/rotary-subwoofer/close-up.jpg"
                    className='float-right padding-top'/>
					Electronics:
					<br/>Actuators:
						<ul>			
							<li>YaeTek 24V DC 350W brushed electric motor</li>
							<li>Skar Audio EVL-65 D2 6.5" 400 watt subwoofer</li>
						</ul>
						Power:
						<ul>        
							<li> 24V 20A adjustable voltage power supply</li>
							<li> DC-DC ±5V boost-buck converter </li>
							<li> TL081P operational amplifier</li>
							<li> Assorted resistors and capacitors</li>
							<li> SparkFun TRRS 3.5mm jack breakout</li>
						</ul>
						Feedback Control:
						<ul>
							<li>Signswise incremental optical rotary encoder 360P/R </li>
							<li> X9C103S digital potentiometer module</li>
						</ul>
						Hardware:
					<ul>
						<li>5-blade metal rotor head for Align Trex 450 PRO V3</li>
						<li>3D printed fan blades, adapters, and pulleys</li>
						<li>Custom machined shaft adapter</li>
						<li>Rubber drive belt</li>
						<li>Assorted metric nuts and bolts</li>
					</ul>
                </p>
            </section>
            <section className='text-section'>
                <header><h2>Construction Process</h2></header>
				
                <p><img src="/assets/rotary-subwoofer/linear-actuator.jpg"
                    className='float-right padding-top'/>The rotary subwoofer uses a rotating motor to control blade speed and and a linear actuator to control pitch. The linear actuator consists of a modified 6.5 inch subwoofer driver. The driver was modified by removing the speaker cone and basket with a razor blade and dremel tool. A shaft goes through the center of the linear actuator to spin the blades, and a swash plate designed for RC helicopters connects to the linear actuator. The shaft that connects the motor to the blade assembly was manufactured in-house. Five extra wide blades were designed in CAD to fit the helicopter swash plate. An adapter was designed and then 3D printed to connect the swash plate to the linear actuator, ensuring even pressure on the actuator and that every blade has the same pitch. All the components were mounted to a wooden platform with with screws and bolts.
                
                
                </p>
                
            </section>
        </main>
    </>
    )
}
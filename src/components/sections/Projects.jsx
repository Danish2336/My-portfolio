import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = ()=>{
return(
<section id="projects" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2
                className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">PCSW</h3>
                    <p className="text-gray-400 mb-4 text-justify">The Punjab Commission on the Status of Women (PCSW)
                        project is a complaint and inquiry management system developed using CodeIgniter 4. The platform
                        empowers users to submit complaints and inquiries and allows administrators and representatives
                        to manage them based on role-based permissions. </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["PHP", "Bootstrap", "Ajax", "Codeigniter4", "MySQL"].map((tech,key)=>(
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}

                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
                            View Project
                        </a>
                    </div>

                </div>

                <div
                    className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">QR Code Generator with vCard Integration</h3>
                    <p className="text-gray-400 mb-4 text-justify">A QR Code Generator system built with CodeIgniter 4
                        (CI4) that takes user data from an input form, generates a QR code containing vCard information,
                        saves the data in a JSON file, and displays contact details in mobile contact form when scanned.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["PHP", "Codeigniter4", "JSON"].map((tech,key)=>(
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}

                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
                            View Project
                        </a>
                    </div>

                </div>

                <div
                    className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Admin Panel and Dashboard</h3>
                    <p className="text-gray-400 mb-4 text-justify">A powerful Admin Dashboard designed for efficient
                        management and real-time insights into your web application.it provides a user-friendly
                        interface with robust features, ensuring seamless control over data and user interactions. </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "Bootstrap", "CSS", "Ajax", "Jquery"].map((tech,key)=>(
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}

                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
                            View Project
                        </a>
                    </div>

                </div>

                <div
                    className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">LMS</h3>
                    <p className="text-gray-400 mb-4 text-justify ">A Locker Management System developed in CodeIgniter
                        4 (CI4) is a secure and efficient way to manage locker assignments, track usage, and control
                        access for organizations such as banks, gyms, offices, schools, and storage facilities. </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["PHP", "Bootstrap", "Codeigniter4", "MySQL"].map((tech,key)=>(
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}

                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
                            View Project
                        </a>
                    </div>

                </div>

            </div>

        </div>
    </RevealOnScroll>
</section>

);
}
import React from "react";

function LearnPage() {
	return (
		<div className="flex flex-col items-center justify-center text-left pt-36">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Cybersecurity <span className="text-red-500">Basics</span>
			</h1>

			<div className="max-w-4xl">
				{" "}
				{/* Increased max-width to max-w-xl */}
				<ol className="list-decimal pl-6 mb-4">
					<li className="mb-4">
						<strong>Understanding cybersecurity threats and risks:</strong> This
						section delves into the various types of cybersecurity threats and
						risks that individuals and organizations may face in the digital
						landscape. It covers concepts such as malware, ransomware, phishing,
						social engineering, and insider threats. Understanding these threats
						is crucial for implementing effective security measures.
					</li>
					<li className="mb-4">
						<strong>Importance of data protection and confidentiality:</strong>{" "}
						Data is a valuable asset for individuals and organizations alike,
						and protecting it from unauthorized access and disclosure is
						paramount. This part emphasizes the significance of data protection
						and confidentiality in safeguarding sensitive information from cyber
						threats and breaches.
					</li>
					<li className="mb-4">
						<strong>
							Overview of common cybersecurity attacks and vulnerabilities:
						</strong>{" "}
						Gain insights into the most prevalent cybersecurity attacks and
						vulnerabilities prevalent today. From malware infections and
						phishing scams to software vulnerabilities and system exploits,
						understanding these attack vectors is essential for developing
						robust defense strategies.
					</li>
					<li className="mb-4">
						<strong>Role of individuals in maintaining cybersecurity:</strong>{" "}
						Cybersecurity is a collective responsibility that involves the
						active participation of every individual within an organization.
						This segment highlights the role of employees and users in
						maintaining cybersecurity hygiene, including practicing good
						password management, being vigilant against suspicious emails, and
						adhering to security policies and procedures.
					</li>
					<li className="mb-4">
						<strong>
							Introduction to cybersecurity frameworks and standards:
						</strong>{" "}
						Explore the various cybersecurity frameworks, standards, and best
						practices commonly used to guide organizations in implementing
						effective security measures. Examples include the NIST Cybersecurity
						Framework, ISO/IEC 27001, and the CIS Controls. Understanding these
						frameworks provides a structured approach to managing cybersecurity
						risks and compliance requirements.
					</li>
				</ol>
				<p>
					By familiarizing oneself with these fundamental concepts of
					cybersecurity, individuals can develop a solid foundation for
					implementing proactive security measures and protecting personal and
					business data from cyber threats.
				</p>
			</div>

			<div className="flex flex-col items-center justify-center text-left pt-36">
				<h1 className="text-3xl font-bold mb-6 text-center">
					Recognizing <span className="text-red-500">Threats</span>
				</h1>

				<div className="max-w-4xl">
					{" "}
					{/* Increased max-width to max-w-xl */}
					<ol className="list-decimal pl-6 mb-4">
						<li className="mb-4">
							<strong>Identifying Suspicious Emails:</strong> Learn how to spot
							common indicators of phishing emails, such as generic greetings,
							urgent requests for personal information, and suspicious email
							addresses or attachments.
						</li>
						<li className="mb-4">
							<strong>Recognizing Phishing Attempts:</strong> Understand the
							tactics used by cybercriminals to trick individuals into divulging
							sensitive information or downloading malware. This includes fake
							websites, deceptive login forms, and coercive language designed to
							induce panic or urgency.
						</li>
						<li className="mb-4">
							<strong>Understanding Malware Indicators:</strong> Familiarize
							yourself with signs of malware infections, such as unusual pop-up
							messages, sluggish system performance, unexplained changes to
							files or settings, and unexpected network activity.
						</li>
						<li className="mb-4">
							<strong>Awareness of Social Engineering Tactics:</strong> Be alert
							to social engineering techniques employed by attackers to
							manipulate individuals into disclosing confidential information or
							performing actions that compromise security. These tactics may
							include pretexting, baiting, tailgating, and quid pro quo schemes.
						</li>
						<li className="mb-4">
							<strong>Reporting and Responding to Suspected Threats:</strong>{" "}
							Know the appropriate steps to take when you encounter a suspected
							cybersecurity threat. This includes reporting suspicious emails or
							activities to your organization's IT department, refraining from
							clicking on suspicious links or attachments, and following
							established incident response procedures.
						</li>
					</ol>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center text-left pt-36 pb-36">
				<h1 className="text-3xl font-bold mb-6 text-center">
					Preventive <span className="text-red-500">Measures</span>
				</h1>

				<div className="max-w-4xl">
					{" "}
					{/* Increased max-width to max-w-xl */}
					<ol className="list-decimal pl-6 mb-4">
						<li className="mb-4">
							<strong>Installing and Updating Security Software:</strong> Ensure
							that antivirus software, firewalls, and other security tools are
							installed on your devices and regularly updated to protect against
							the latest threats.
						</li>
						<li className="mb-4">
							<strong>Creating Strong and Unique Passwords:</strong> Use complex
							passwords that combine uppercase and lowercase letters, numbers,
							and special characters. Avoid using easily guessable passwords
							like "password123" and refrain from reusing passwords across
							multiple accounts.
						</li>
						<li className="mb-4">
							<strong>Enabling Two-Factor Authentication (2FA):</strong>{" "}
							Strengthen the security of your accounts by enabling two-factor
							authentication whenever possible. This adds an extra layer of
							protection by requiring a second form of verification, such as a
							code sent to your phone, in addition to your password.
						</li>
						<li className="mb-4">
							<strong>Securing Wireless Networks:</strong> Secure your home or
							office wireless networks with strong encryption (e.g., WPA2) and
							unique passwords. Disable guest networks or limit their access to
							essential services to prevent unauthorized access.
						</li>
						<li className="mb-4">
							<strong>Regularly Updating Software and Devices:</strong> Keep
							your operating system, software applications, and devices up to
							date with the latest security patches and updates. Software
							vulnerabilities are often exploited by cybercriminals to gain
							unauthorized access to systems.
						</li>
						<li className="mb-4">
							<strong>Practicing Safe Browsing Habits:</strong> Exercise caution
							when browsing the internet and avoid clicking on suspicious links
							or downloading files from unknown sources. Be wary of phishing
							emails and fake websites designed to steal your personal
							information.
						</li>
						<li className="mb-4">
							<strong>Backing Up Data Regularly:</strong> Implement a regular
							backup routine to protect your important files and data from loss
							in the event of a cyber attack or hardware failure. Store backups
							securely offline or in the cloud, and test your backup and
							recovery processes periodically.
						</li>
						<li className="mb-4">
							<strong>Educating Yourself and Others:</strong> Stay informed
							about the latest cybersecurity threats and best practices through
							online resources, courses, and security awareness training.
							Educate your family, friends, and colleagues about the importance
							of cybersecurity and encourage them to adopt safe online
							practices.
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default LearnPage;

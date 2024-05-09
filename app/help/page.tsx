import React from "react";

function HelpPage() {
	return (
		<div className="flex flex-col items-center justify-center text-left pt-36">
			<h1 className="text-3xl font-bold mb-6 text-center">
				What <span className="text-red-500">Happened</span>?
			</h1>

			<div className="max-w-6xl">
				<h2 className="text-lg font-semibold mb-4">Identify the Signs:</h2>
				<ul className="list-disc pl-6 mb-4">
					<li>Look for unusual activities on your device or accounts.</li>
					<li>
						Check for unrecognized logins, changes in settings, or unexpected
						messages.
					</li>
				</ul>

				<h2 className="text-lg font-semibold mb-4">Check for Data Breaches:</h2>
				<ul className="list-disc pl-6 mb-4">
					<li>Investigate if any sensitive data has been compromised.</li>
					<li>
						Review your accounts for any unauthorized transactions or access to
						personal information.
					</li>
				</ul>

				<h2 className="text-lg font-semibold mb-4">Assess Impact:</h2>
				<ul className="list-disc pl-6 mb-4">
					<li>Determine the potential impact of the hack.</li>
					<li>
						Identify what information or assets may have been compromised and
						the associated risks.
					</li>
				</ul>

				<h2 className="text-lg font-semibold mb-4">Containment:</h2>
				<ul className="list-disc pl-6 mb-4">
					<li>
						Take immediate steps to contain the breach and prevent further
						damage.
					</li>
					<li>
						Change passwords, disconnect devices from networks, or contact
						relevant authorities as needed.
					</li>
				</ul>

				<h2 className="text-lg font-semibold mb-4">Documentation:</h2>
				<ul className="list-disc pl-6">
					<li>Document all relevant information about the incident.</li>
					<li>
						Include timestamps, affected accounts, and any suspicious
						activities.
					</li>
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center text-left pt-36">
				<h1 className="text-3xl font-bold mb-6 text-center">
					Immediate <span className="text-red-500">Actions</span>
				</h1>

				<div className="max-w-4xl">
					{" "}
					{/* Increased max-width to max-w-xl */}
					<h2 className="text-lg font-normal mb-4">
						Upon detecting a potential cyber attack, it's crucial to take swift
						action to minimize the damage and mitigate risks. Here's a
						step-by-step guide on what to do immediately:
					</h2>
					<ul className="list-disc pl-6 mb-4">
						<li className="mb-4">
							<strong>Isolate Infected Devices:</strong> Disconnect the affected
							devices from the internet or any network to prevent the spread of
							malware or unauthorized access.
						</li>
						<li className="mb-4">
							<strong>Change Credentials:</strong> Immediately change passwords
							for compromised accounts and ensure that they are strong and
							unique. Consider enabling two-factor authentication for added
							security.
						</li>
						<li className="mb-4">
							<strong>Notify IT Department:</strong> Inform your organization's
							IT department or security team about the incident. They can
							provide further guidance and assistance in containing the breach.
						</li>
						<li className="mb-4">
							<strong>Preserve Evidence:</strong> Preserve evidence of the
							attack by taking screenshots or capturing relevant logs. This
							information will be valuable for investigating the incident and
							identifying the root cause.
						</li>
						<li className="mb-4">
							<strong>Update Security Software:</strong> Ensure that your
							security software, including antivirus programs and firewalls, is
							up to date. Perform scans to detect and remove any malicious
							software.
						</li>
						<li className="mb-4">
							<strong>Monito for Further Activity:</strong> Keep a close eye on
							your systems for any further suspicious activity or signs of
							compromise. Report any anomalies to the appropriate authorities.
						</li>
						<li className="mb-4">
							<strong>Communicate Internally:</strong> Communicate with relevant
							stakeholders within your organization about the incident and any
							necessary actions they need to take to prevent further damage.
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center text-left pt-36 pb-36">
				<h1 className="text-3xl font-bold mb-6 text-center">
					Reporting the <span className="text-red-500">Incident</span>
				</h1>

				<div className="max-w-4xl">
					{" "}
					{/* Increased max-width to max-w-xl */}
					<h2 className="text-lg font-normal mb-4">
						Reporting a cybersecurity incident is critical for initiating
						appropriate response measures and mitigating future risks. Here's a
						guide on how to report a cybersecurity incident to the relevant
						authorities and internal personnel:
					</h2>
					<ul className="list-disc pl-6 mb-4">
						<li className="mb-4">
							<strong>Internal Reporting Protocol:</strong> Familiarize yourself
							with your organization's internal reporting procedures for
							cybersecurity incidents. This may involve contacting the IT
							department, security team, or designated incident response team.
						</li>
						<li className="mb-4">
							<strong>Document the Incident:</strong> Gather as much information
							as possible about the incident, including the nature of the
							attack, affected systems, and potential impact. Document
							timestamps, log files, and any other relevant evidence.
						</li>
						<li className="mb-4">
							<strong>Notify Management:</strong> Inform senior management or
							designated decision-makers within your organization about the
							incident. Provide them with a clear overview of the situation and
							potential implications for business operations.
						</li>
						<li className="mb-4">
							<strong>Report to Regulatory Authorities:</strong> If required by
							law or industry regulations, report the incident to relevant
							regulatory authorities or government agencies. This may include
							data protection authorities or law enforcement agencies.
						</li>
						<li className="mb-4">
							<strong>Collaborate with Partners:</strong> If the incident
							involves third-party vendors or partners, collaborate with them to
							address the issue and share relevant information. This can help
							prevent similar incidents in the future.
						</li>
						<li className="mb-4">
							<strong>Communicate with Affected Parties:</strong> Keep
							stakeholders informed about the incident and its impact, including
							customers, employees, and partners. Transparency is key to
							maintaining trust and credibility.
						</li>
						<li className="mb-4">
							<strong>Review and Improve:</strong> After the incident is
							resolved, conduct a thorough review to identify lessons learned
							and areas for improvement in your organization's cybersecurity
							posture. Update policies, procedures, and training programs
							accordingly.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default HelpPage;

"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useState } from "react";

const HeroWithForm = ({ data }) => {
	const {
		title,
		body,
		listTitle,
		listBody,
		badge,
		formTitle,
		formList,
		formButtonText,
		formListBackgroundColor,
		formListDotColor,
	} = data;

	const [formValue, setFormValue] = useState({
		firstName: null,
		lastName: null,
		email: null,
		phone: null,
		birthDate: null,
		terms: null,
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		alert("form submitted");

		e.target.reset();
	};

	return (
		<div className="flex flex-wrap pt-20 pb-32">
			{(title || body || listTitle || listBody.length > 0) && (
				<div className="w-1/2">
					<div className="max-w-[34.625rem] text-lg ml-auto mr-16">
						{title && (
							<h1 className="font-bold text-[3.125rem] leading-[1.25]">
								{title}
							</h1>
						)}

						{body && (
							<div className="mt-6 [&>*+*]:mt-7 tracking-[0.01em]">
								<PortableText value={body} />
							</div>
						)}

						{listTitle && (
							<h2 className="text-2xl mt-8 font-semibold">{listTitle}</h2>
						)}

						{listBody.length > 0 && (
							<ul
								className="mt-6 [&>*+*]:mt-4 pl-8"
								style={{
									"--badge-bg-color": badge.backgroundColor,
									"--badge-icon-color": badge.iconColor,
								}}
							>
								{listBody.map((item) => {
									const { _id, body } = item;

									return (
										_id &&
										body && (
											<li key={_id} className="flex items-start">
												<span className="bg-[var(--badge-bg-color)] text-[var(--badge-icon-color)] inline-block shrink-0 w-10 aspect-square rounded-full grid place-items-center">
													<FontAwesomeIcon icon={faCheck} />
												</span>

												<span className="inline-block ml-4">
													<PortableText value={body} />
												</span>
											</li>
										)
									);
								})}
							</ul>
						)}
					</div>
				</div>
			)}

			<div className="w-1/2">
				<div className="bg-white py-10 px-16 rounded-[2.5rem] max-w-[41rem] ml-10">
					{formTitle && <h4 className="text-3xl font-bold">{formTitle}</h4>}

					{formList.length > 0 && (
						<ul
							className="bg-[var(--list-bg-color)] rounded-xl mt-4 p-4 [&>*+*]:mt-2"
							style={{
								"--list-bg-color": formListBackgroundColor,
								"--list-dot-color": formListDotColor,
							}}
						>
							{formList.map((item) => {
								const { _id, body } = item;

								return (
									_id &&
									body && (
										<li
											key={_id}
											className="before:bg-[var(--list-dot-color)] before:w-1.5 before:aspect-square before:inline-block before:rounded-full before:shrink-0 flex items-start before:mt-1.5 before:mr-2 text-[.75rem]"
										>
											<PortableText value={body} />
										</li>
									)
								);
							})}
						</ul>
					)}

					<form onSubmit={handleSubmit} className="[&>*+*]:mt-4 mt-6">
						<input
							id="first-name"
							name="first-name"
							type="text"
							placeholder="First Name"
							className="w-full inline-block border-2 border-slate-300 rounded-lg h-16 px-5"
							onChange={(e) =>
								setFormValue({ ...formValue, firstName: e.target.value })
							}
						/>

						<input
							id="last-name"
							name="last-name"
							type="text"
							placeholder="Last Name"
							className="w-full inline-block border-2 border-slate-300 rounded-lg h-16 px-5"
							onChange={(e) =>
								setFormValue({ ...formValue, lastName: e.target.value })
							}
						/>

						<input
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							className="w-full inline-block border-2 border-slate-300 rounded-lg h-16 px-5"
							onChange={(e) =>
								setFormValue({ ...formValue, email: e.target.value })
							}
						/>

						<input
							id="mobile-number"
							name="mobile-number"
							type="tel"
							placeholder="Mobile Phone Number"
							className="w-full inline-block border-2 border-slate-300 rounded-lg h-16 px-5"
							onChange={(e) =>
								setFormValue({ ...formValue, phone: e.target.value })
							}
						/>

						<input
							id="date-of-birth"
							name="date-of-birth"
							type="date"
							placeholder="Date of Birth"
							className="w-full inline-block border-2 border-slate-300 rounded-lg h-16 px-5"
							onChange={(e) =>
								setFormValue({ ...formValue, birthDate: e.target.value })
							}
						/>

						<div className="checkbox flex mt-4 [&>input:checked~label]:after:inline-block">
							<input
								id="terms"
								name="terms"
								type="checkbox"
								placeholder="terms"
								className="invisible w-0 h-0"
								onChange={(e) =>
									setFormValue({ ...formValue, terms: e.target.checked })
								}
							/>

							<label
								htmlFor="terms"
								className="before:border-slate-300 before:border-2 before:inline-block before:w-7 before:rounded-lg before:aspect-square flex items-start before:shrink-0 before:mr-4 after:absolute relative after:inline-block after:w-4 after:h-2.5 after:border-[0.1875rem] after:left-1.5 after:top-[0.4375rem] after:border-slate-400 after:border-t-0 after:border-r-0 after:-rotate-45 after:hidden "
							>
								<span>
									I declare that i have entered my details truthfully and accept
									the{" "}
									<Link
										href="claim"
										className="text-blue-700 underline font-medium"
									>
										Terms and conditions
									</Link>
									,{" "}
									<Link
										href="privacy"
										className="text-blue-700 underline font-medium"
									>
										Privacy statement
									</Link>{" "}
									and{" "}
									<Link
										href="proxy"
										className="text-blue-700 underline font-medium"
									>
										Proxy
									</Link>
								</span>
							</label>
						</div>

						<button className="w-full p-5 mt-4 bg-pink-500 text-white font-semibold rounded-full">
							{formButtonText ?? "Submit"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default HeroWithForm;

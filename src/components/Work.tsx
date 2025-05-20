import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock data for Work
const workItems = [
	{
		id: 1,
		title: "Software Engineer at PT BFI Finance Indonesia",
		description: [
			"I'm part of the Customer Onboarding team, where I manage customer loan and identity data verification and integrity",
			"Improved the loan application by developing its transition from a single-product to a multi-product system, resulting in faster processing times.",
			"Built and refined authentication and multi-layer authorization protocols (passwordless) for mobile application security.",
			"Contributed to the loan system re-architecture by enhancing the surveyor management and scheduling functionalities"
		],
		date: "Jul 2022 to Present",
		type: "work",
		tags: ["Golang", "Authorization", "Temporal"],
		link: "https://www.bfi.co.id/"
	},
	{
		id: 2,
		title: "Software Engineer at M+ Software",
		description: [
			"[Allnex] Integrated the Windcave multi-payment API, expanding payment options and streamlining transaction processing.",
			"[Predige] Migrated the Odoo ERP from version 12 to 14, ensuring system compatibility and feature enhancements."
		],
		date: "Sep 2021 - Jan 2022",
		type: "work",
		tags: ["Odoo", "Javascript"],
		link: "https://www.mplus.software/"
	}
];

const Work = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoaded, setIsLoaded] = useState(false);
	const itemsPerPage = 3;

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	// Calculate items for current page
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = workItems.slice(indexOfFirstItem, indexOfLastItem);

	// Calculate total pages
	const totalPages = Math.ceil(workItems.length / itemsPerPage);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		document.getElementById('work-section')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section id="work-section" className="section" style={{ opacity: isLoaded ? 1 : 0 }}>
			<div className="content-container">
				<h2 className="section-title">Work Experience</h2>
				<div className="space-y-8 mb-8">
					{currentItems.map(item => (
						<Card key={item.id} className="p-6 hover:border-black transition-colors">
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
								<h3 className="text-lg font-medium">{item.title}</h3>
								<span className="text-sm text-muted-foreground sm:text-right">{item.date}</span>
							</div>
							{Array.isArray(item.description) ? (
								<ul className="mb-4 text-muted-foreground list-disc pl-5">
									{item.description.map((desc, idx) => (
										<li key={idx} className="mb-1 leading-relaxed break-words">{desc}</li>
									))}
								</ul>
							) : (
								<p className="mb-4 text-muted-foreground">{item.description}</p>
							)}
							<div className="flex justify-between items-center">
								<div className="flex flex-wrap gap-2">
									{item.tags.slice(0, 5).map((tag, index) => (
										<span key={index} className="text-xs px-2 py-1 bg-secondary rounded-sm">
											{tag}
										</span>
									))}
									{item.tags.length > 5 && (
										<span className="text-xs px-2 py-1 bg-secondary rounded-sm">
											+{item.tags.length - 2}
										</span>
									)}
								</div>
								{/* <div className="text-sm">
									<span className="mr-2 text-muted-foreground">Work</span>
									<a href={item.link} className="underline hover:text-gray-700" target="_blank" rel="noopener noreferrer">View</a>
								</div> */}
							</div>
						</Card>
					))}
				</div>
				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex justify-center gap-2 mt-8">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
							<Button
								key={number}
								onClick={() => handlePageChange(number)}
								variant={currentPage === number ? "default" : "outline"}
								size="sm"
								className="w-8 h-8 p-0"
							>
								{number}
							</Button>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Work;

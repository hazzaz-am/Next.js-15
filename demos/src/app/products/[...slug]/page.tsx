export default async function ChildPage({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) {
	const { slug } = await params;

	return (
		<div>
			<div className="flex items-center gap-3">
				{slug.map((p, i) => (
					<span key={p} className="">
						{
              slug.length - 1 === i ? p : p + " >"
            }
					</span>
				))}
			</div>
		</div>
	);
}

import Link from "next/link";

const FooterColumn = ({ title, links }) => {
    return (
        <div>
            <h3 className="font-bold mb-4">{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:underline">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
        </div>
    );
};

export default FooterColumn;

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-[#0A192F] text-[#8892B0] border-t border-[#112240]">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-[#64FFDA] font-semibold">Sudheer Debbati</span> — All rights reserved.
      </p>
    </footer>
  );
}

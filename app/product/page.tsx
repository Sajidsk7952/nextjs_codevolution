import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1>Product page</h1>
      <ul>
        <li><Link href={'/product/1'}>product 1</Link></li>
        <li><Link href={'/product/2'} replace>product 2</Link></li>
        <li><Link href={'/product/3'}>product 3</Link></li>
      </ul>
    </section>
  );
}

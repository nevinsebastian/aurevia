import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Shipping & Delivery" };

export default function ShippingPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Shipping & Delivery</h1>
        <p>
          {company.name} is a marketing organisation. Consumer deliveries, where available, are
          fulfilled by the marketplace or authorised retailer handling the order.
        </p>
        <p>
          Professional and distributor shipments are arranged case by case. Ask our team about
          current lead times for a named pack.
        </p>
      </div>
    </section>
  );
}

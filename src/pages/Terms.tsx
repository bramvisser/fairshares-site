import { Box, Container, Text, VStack, Button, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Terms = () => (
  <Box py={20}>
    <Container maxW="800px">
      <Heading size="xl" mb={8} textAlign="center" color="brand.blue">Terms and Conditions</Heading>
      <VStack spacing={6} align="start" fontSize="md">
        <Text fontWeight="bold">1. Definitions</Text>
        <Text>
          In these terms and conditions, the following definitions apply:
          <br /><br />
          <b>Supplementary agreement:</b> an agreement whereby the consumer acquires products, digital content and/or services in connection with a distance contract and these goods, digital content and/or services are supplied by FS or by a third party on the basis of an agreement between that third party and FS.<br />
          <b>Cooling-off period:</b> the period within which the consumer can make use of his right of withdrawal.<br />
          <b>Consumer:</b> the natural person who is not acting for purposes related to his trade, business, craft or profession.<br />
          <b>Day:</b> calendar day.<br />
          <b>Digital content:</b> data produced and delivered in digital form.<br />
          <b>Long-term contract:</b> a contract for the regular supply of goods, services and/or digital content over a certain period.<br />
          <b>Durable data carrier:</b> any tool - including e-mail - that enables the consumer or FS to store information addressed to him personally in a way that allows future consultation or use for a period appropriate to the purpose for which the information is intended, and that allows unaltered reproduction of the stored information.<br />
          <b>Right of withdrawal:</b> the possibility for the consumer to withdraw from the distance contract within the cooling-off period.<br />
          <b>FS:</b> the natural or legal person who is a member of FairShares and offers products, (access to) digital content and/or services to consumers at a distance.<br />
          <b>Distance contract:</b> a contract concluded between FS and the consumer within the framework of an organized system for distance selling of products, digital content and/or services, whereby up to and including the conclusion of the contract exclusive or joint use is made of one or more means of distance communication.<br />
          <b>Means of distance communication:</b> means that can be used to conclude a contract, without the consumer and FS having to be together in the same room at the same time.
        </Text>
        <Text fontWeight="bold">2. FS Details</Text>
        <Text>
          FairShares B.V.<br />
          Wilhelminasingel 4<br />
          6524 AK Nijmegen<br />
          The Netherlands<br />
          info@fairshares.com<br />
          KvK number: 77435532<br />
          VAT number: NL810215305B01
        </Text>
        <Text fontWeight="bold">3. Applicability</Text>
        <Text>
          3.1. These terms and conditions apply to every offer from FS and to every distance contract concluded between FS and the consumer.<br />
          3.2. Before the distance contract is concluded, the text of these terms and conditions will be made available to the consumer. If this is not reasonably possible, FS will indicate, before the distance contract is concluded, how the terms and conditions can be inspected at FS and that they will be sent free of charge at the consumer's request as soon as possible.<br />
          3.3. If the distance contract is concluded electronically, in deviation from the previous paragraph and before the distance contract is concluded, the text of these terms and conditions may be made available to the consumer electronically in such a way that the consumer can easily store it on a durable data carrier. If this is not reasonably possible, it will be indicated where the terms and conditions can be consulted electronically and that they will be sent free of charge electronically or otherwise at the consumer's request.<br />
          3.4. If, in addition to these terms and conditions, specific product or service conditions apply, the second and third paragraphs apply accordingly and the consumer can always invoke the applicable provision that is most favorable to him in the event of conflicting conditions.
        </Text>
        <Text fontWeight="bold">4. The Offer</Text>
        <Text>
          4.1. If an offer has a limited period of validity or is made subject to conditions, this will be explicitly stated in the offer.<br />
          4.2. The offer contains a complete and accurate description of the offered products, digital content and/or services. The description is sufficiently detailed to enable a proper assessment of the offer by the consumer. If FS uses images, these are a true representation of the offered products, services and/or digital content. Obvious mistakes or errors in the offer do not bind FS.<br />
          4.3. Each offer contains such information that it is clear to the consumer what rights and obligations are attached to the acceptance of the offer.
        </Text>
        <Text fontWeight="bold">5. The Contract</Text>
        <Text>
          5.1. The contract is concluded, subject to the provisions of paragraph 4, at the moment the consumer accepts the offer and meets the conditions set.<br />
          5.2. If the consumer has accepted the offer electronically, FS will immediately confirm receipt of the acceptance of the offer electronically. As long as the receipt of this acceptance has not been confirmed by FS, the consumer may dissolve the contract.<br />
          5.3. If the contract is concluded electronically, FS will take appropriate technical and organizational measures to secure the electronic transfer of data and ensure a safe web environment. If the consumer can pay electronically, FS will observe appropriate security measures.<br />
          5.4. FS may, within legal frameworks, inform itself whether the consumer can meet his payment obligations, as well as all those facts and factors that are important for a responsible conclusion of the distance contract. If, based on this investigation, FS has good reasons not to enter into the contract, it is entitled to refuse an order or request or to attach special conditions to the execution, stating reasons.<br />
          5.5. FS will, at the latest upon delivery of the product, service or digital content to the consumer, provide the following information, in writing or in such a way that the consumer can store it in an accessible manner on a durable data carrier:
          <ul style={{ marginLeft: '1em' }}>
            <li>the visiting address of the FS establishment where the consumer can lodge complaints;</li>
            <li>the conditions under which and the way in which the consumer can make use of the right of withdrawal, or a clear statement regarding the exclusion of the right of withdrawal;</li>
            <li>information about guarantees and existing after-sales service;</li>
            <li>the price including all taxes of the product, service or digital content; where applicable, the costs of delivery; and the method of payment, delivery or execution of the distance contract;</li>
            <li>the requirements for terminating the contract if the contract has a duration of more than one year or is of indefinite duration;</li>
            <li>if the consumer has a right of withdrawal, the model withdrawal form.</li>
          </ul>
          5.6. In the case of a long-term transaction, the provision in the previous paragraph applies only to the first delivery.
        </Text>
        <Text fontWeight="bold">6. Right of Withdrawal</Text>
        <Text>
          6.1. For products: The consumer can dissolve a contract regarding the purchase of a product during a cooling-off period of at least 14 days without giving reasons. FS may ask the consumer for the reason for withdrawal, but not oblige him to state his reason(s).<br />
          6.2. The cooling-off period referred to in paragraph 1 starts on the day after the consumer, or a third party designated by the consumer who is not the carrier, has received the product, or:<br />
          - if the consumer has ordered several products in the same order: the day on which the consumer, or a third party designated by him, has received the last product. FS may, provided it has clearly informed the consumer of this prior to the ordering process, refuse an order for several products with different delivery times.<br />
          - if the delivery of a product consists of several shipments or parts: the day on which the consumer, or a third party designated by him, has received the last shipment or part;<br />
          - for contracts for regular delivery of products during a certain period: the day on which the consumer, or a third party designated by him, has received the first product.<br />
          6.3. For services and digital content not supplied on a tangible medium: The consumer can dissolve a service contract and a contract for the supply of digital content not supplied on a tangible medium during a period of at least 14 days without giving reasons. FS may ask the consumer for the reason for withdrawal, but not oblige him to state his reason(s).<br />
          6.4. The cooling-off period referred to in paragraph 3 starts on the day following the conclusion of the contract.<br />
          6.5. Extended cooling-off period for products, services and digital content not supplied on a tangible medium if not informed about the right of withdrawal:<br />
          - If FS has not provided the consumer with the legally required information about the right of withdrawal or the model withdrawal form, the cooling-off period expires twelve months after the end of the original cooling-off period determined in accordance with the previous paragraphs of this article.<br />
          - If FS provides the information referred to in the previous paragraph to the consumer within twelve months after the start date of the original cooling-off period, the cooling-off period expires 14 days after the day on which the consumer received that information.
        </Text>
        <Text fontWeight="bold">7. Consumer Obligations During the Cooling-off Period</Text>
        <Text>
          7.1. During the cooling-off period, the consumer will handle the product and packaging with care. He will only unpack or use the product to the extent necessary to determine the nature, characteristics and functioning of the product. The starting point is that the consumer may only handle and inspect the product as he would be allowed to do in a shop.<br />
          7.2. The consumer is only liable for any diminished value of the product resulting from handling the product in a way that goes beyond what is permitted in paragraph 1.<br />
          7.3. The consumer is not liable for any diminished value of the product if FS has not provided him with all legally required information about the right of withdrawal before or at the conclusion of the contract.
        </Text>
        <Text fontWeight="bold">8. Exercise of the Right of Withdrawal by the Consumer and Costs Thereof</Text>
        <Text>
          8.1. If the consumer makes use of his right of withdrawal, he shall notify FS within the cooling-off period by means of the model withdrawal form or in another unequivocal manner.<br />
          8.2. As soon as possible, but within 14 days from the day following the notification referred to in paragraph 1, the consumer shall return the product or hand it over to (an authorized representative of) FS. This is not necessary if FS has offered to collect the product itself. The consumer has observed the return period if he returns the product before the cooling-off period has expired.<br />
          8.3. The consumer shall return the product with all delivered accessories, if reasonably possible in the original condition and packaging, and in accordance with the reasonable and clear instructions provided by FS.<br />
          8.4. The risk and burden of proof for the correct and timely exercise of the right of withdrawal lies with the consumer.<br />
          8.5. The consumer bears the direct costs of returning the product. If FS has not stated that the consumer has to bear these costs or if FS indicates that it will bear the costs itself, the consumer does not have to bear the costs of return.<br />
          8.6. If the consumer withdraws after first having expressly requested that the performance of the service or the supply of gas, water or electricity not made ready for sale in a limited volume or quantity commence during the cooling-off period, the consumer owes FS an amount proportional to that part of the obligation that has been fulfilled by FS at the time of withdrawal, compared to the full performance of the obligation.<br />
          8.7. The consumer does not bear any costs for the performance of services or the supply of water, gas or electricity, not made ready for sale in a limited volume or quantity, or for the supply of district heating, if:<br />
          - FS has not provided the consumer with the legally required information about the right of withdrawal, the reimbursement of costs in the event of withdrawal or the model withdrawal form, or;<br />
          - the consumer has not expressly requested the commencement of the performance of the service or supply of gas, water, electricity or district heating during the cooling-off period.<br />
          8.8. The consumer does not bear any costs for the full or partial delivery of digital content not supplied on a tangible medium, if:<br />
          - he has not expressly agreed to the commencement of the performance of the contract before the end of the cooling-off period;<br />
          - he has not acknowledged losing his right of withdrawal when giving his consent; or<br />
          - FS has failed to confirm this statement from the consumer.<br />
          8.9. If the consumer makes use of his right of withdrawal, all additional agreements are dissolved by operation of law.
        </Text>
        <Text fontWeight="bold">9. FS Obligations in Case of Withdrawal</Text>
        <Text>
          9.1. If FS enables the notification of withdrawal by the consumer electronically, it will immediately send a confirmation of receipt after receiving this notification.<br />
          9.2. FS will reimburse all payments made by the consumer, including any delivery costs charged by FS for the returned product, without delay but within 14 days following the day on which the consumer notifies it of the withdrawal. Unless FS offers to collect the product itself, it may wait to refund until it has received the product or until the consumer proves that he has returned the product, whichever is earlier.<br />
          9.3. FS will use the same means of payment that the consumer used, unless the consumer agrees to a different method. The refund is free of charge for the consumer.<br />
          9.4. If the consumer has chosen a more expensive method of delivery than the cheapest standard delivery, FS does not have to refund the additional costs for the more expensive method.
        </Text>
        <Text fontWeight="bold">10. Exclusion of the Right of Withdrawal</Text>
        <Text>
          FS may exclude the following products and services from the right of withdrawal, but only if FS has clearly stated this in the offer, or at least in good time before the conclusion of the contract:
          <ul style={{ marginLeft: '1em' }}>
            <li>Products or services whose price is subject to fluctuations in the financial market over which FS has no influence and which may occur within the withdrawal period;</li>
            <li>Contracts concluded during a public auction. A public auction is a method of sale whereby products, digital content and/or services are offered by FS to the consumer who is personally present or has the opportunity to be personally present at the auction, under the direction of an auctioneer, and whereby the successful bidder is obliged to purchase the products, digital content and/or services;</li>
            <li>Service contracts, after full performance of the service, but only if:</li>
            <ul style={{ marginLeft: '1em' }}>
              <li>the performance has begun with the consumer's express prior consent; and</li>
              <li>the consumer has declared that he loses his right of withdrawal as soon as FS has fully performed the contract;</li>
            </ul>
            <li>Service contracts for the provision of accommodation, if a specific date or period of performance is provided for in the contract and other than for residential purposes, goods transport, car rental services and catering;</li>
            <li>Contracts relating to leisure activities, if a specific date or period of performance is provided for in the contract;</li>
            <li>Products made to the consumer's specifications, which are not prefabricated and are made on the basis of an individual choice or decision by the consumer, or which are clearly intended for a specific person;</li>
            <li>Products that spoil quickly or have a limited shelf life;</li>
            <li>Sealed products that are not suitable for return for reasons of health protection or hygiene and whose seal has been broken after delivery;</li>
            <li>Products which, after delivery, are by their nature irrevocably mixed with other products;</li>
            <li>Alcoholic beverages whose price was agreed upon at the conclusion of the contract, but whose delivery can only take place after 30 days, and whose actual value depends on fluctuations in the market over which FS has no influence;</li>
            <li>Sealed audio, video recordings and computer software, the seal of which has been broken after delivery;</li>
            <li>Newspapers, periodicals or magazines, with the exception of subscriptions to them;</li>
            <li>The supply of digital content other than on a tangible medium, but only if:</li>
            <ul style={{ marginLeft: '1em' }}>
              <li>the performance has begun with the consumer's express prior consent; and</li>
              <li>the consumer has declared that he thereby loses his right of withdrawal.</li>
            </ul>
          </ul>
        </Text>
        <Text fontWeight="bold">11. Price</Text>
        <Text>
          11.1. During the period of validity stated in the offer, the prices of the offered products and/or services will not be increased, except for price changes due to changes in VAT rates.<br />
          11.2. In deviation from the previous paragraph, FS may offer products or services whose prices are subject to fluctuations in the financial market and over which FS has no influence, at variable prices. This link to fluctuations and the fact that any prices stated are target prices will be stated in the offer.<br />
          11.3. Price increases within 3 months after the conclusion of the contract are only permitted if they are the result of statutory regulations or provisions.<br />
          11.4. Price increases from 3 months after the conclusion of the contract are only permitted if FS has stipulated this and:<br />
          - they are the result of statutory regulations or provisions; or<br />
          - the consumer has the authority to terminate the contract as of the day on which the price increase takes effect.<br />
          11.5. The prices stated in the offer of products or services include VAT.
        </Text>
        <Text fontWeight="bold">12. Performance of the Contract and Additional Guarantee</Text>
        <Text>
          12.1. FS guarantees that the products and/or services comply with the contract, the specifications stated in the offer, the reasonable requirements of soundness and/or usability and the legal provisions and/or government regulations existing on the date of the conclusion of the contract. If agreed, FS also guarantees that the product is suitable for use other than normal use.<br />
          12.2. An additional guarantee provided by FS, its supplier, manufacturer or importer never limits the legal rights and claims that the consumer can assert against FS under the contract if FS has failed to fulfill its part of the contract.<br />
          12.3. Additional guarantee means any commitment by FS, its supplier, importer or producer in which it grants the consumer certain rights or claims that go beyond what it is legally obliged to do in the event that it has failed to fulfill its part of the contract.
        </Text>
        <Text fontWeight="bold">13. Delivery and Execution</Text>
        <Text>
          13.1. FS will take the greatest possible care when receiving and executing orders for products and when assessing requests for the provision of services.<br />
          13.2. The place of delivery is the address that the consumer has made known to FS.<br />
          13.3. With due observance of what is stated in Article 4 of these terms and conditions, FS will execute accepted orders expeditiously but at the latest within 30 days, unless another delivery period has been agreed. If delivery is delayed, or if an order cannot be executed or can only be executed in part, the consumer will be notified of this no later than 30 days after he has placed the order. In that case, the consumer has the right to dissolve the contract free of charge and is entitled to any compensation.<br />
          13.4. After dissolution in accordance with the previous paragraph, FS will immediately refund the amount paid by the consumer.<br />
          13.5. The risk of damage and/or loss of products rests with FS until the moment of delivery to the consumer or a pre-designated representative made known to FS, unless expressly agreed otherwise.
        </Text>
        <Text fontWeight="bold">14. Long-term Transactions: Duration, Termination and Renewal</Text>
        <Text>
          14.1. Termination:<br />
          - The consumer may terminate a contract entered into for an indefinite period and which extends to the regular delivery of products (including electricity) or services at any time, subject to agreed termination rules and a notice period of no more than one month.<br />
          - The consumer may terminate a contract entered into for a definite period and which extends to the regular delivery of products (including electricity) or services at any time at the end of the definite period, subject to agreed termination rules and a notice period of no more than one month.<br />
          - The consumer may terminate the contracts referred to in the previous paragraphs:<br />
          -- at any time and not be limited to termination at a specific time or in a specific period;<br />
          -- at least terminate in the same way as they were entered into by him;<br />
          -- always terminate with the same notice period as FS has stipulated for itself.<br />
          14.2. Renewal:<br />
          - A contract entered into for a definite period and which extends to the regular delivery of products (including electricity) or services may not be tacitly renewed or extended for a definite period.<br />
          - By way of derogation from the previous paragraph, a contract entered into for a definite period and which extends to the regular delivery of daily, news and weekly newspapers and magazines may be tacitly renewed for a definite period of up to three months, if the consumer can terminate this renewed contract at the end of the renewal with a notice period of no more than one month.<br />
          - A contract entered into for a definite period and which extends to the regular delivery of products or services may only be tacitly renewed for an indefinite period if the consumer may terminate at any time with a notice period of no more than one month. The notice period is a maximum of three months in the event that the contract extends to the regular, but less than once a month, delivery of daily, news and weekly newspapers and magazines.<br />
          - A contract with a limited duration for the regular delivery of daily, news and weekly newspapers and magazines (trial or introductory subscription) is not tacitly continued and ends automatically after the trial or introductory period.<br />
          14.3. Duration:<br />
          - If a contract has a duration of more than one year, the consumer may terminate the contract at any time after one year with a notice period of no more than one month, unless reasonableness and fairness oppose termination before the end of the agreed duration.
        </Text>
        <Text fontWeight="bold">15. Payment</Text>
        <Text>
          15.1. Unless otherwise provided in the contract or additional conditions, the amounts owed by the consumer must be paid within 14 days after the start of the cooling-off period, or in the absence of a cooling-off period within 14 days after the conclusion of the contract. In the case of a contract for the provision of a service, this period commences on the day after the consumer has received the confirmation of the contract.<br />
          15.2. When selling products to consumers, the consumer may never be obliged in general terms and conditions to make an advance payment of more than 50%. When advance payment has been stipulated, the consumer cannot assert any rights regarding the execution of the relevant order or service(s) before the stipulated advance payment has been made.<br />
          15.3. The consumer has the duty to report inaccuracies in provided or stated payment details to FS without delay.<br />
          15.4. If the consumer does not fulfill his payment obligation(s) on time, he is, after being notified by FS of the late payment and FS has granted the consumer a period of 14 days to still fulfill his payment obligations, after the non-payment within this 14-day period, owes the statutory interest on the outstanding amount and FS is entitled to charge the extrajudicial collection costs incurred by it. These collection costs amount to a maximum of: 15% on outstanding amounts up to €2,500; 10% on the next €2,500 and 5% on the next €5,000 with a minimum of €40. FS may deviate from the stated amounts and percentages for the benefit of the consumer.
        </Text>
        <Text fontWeight="bold">16. Choice of Forum</Text>
        <Text>
          16.1. Only Dutch law applies to agreements between FS and the consumer to which these terms and conditions relate.
        </Text>
        <Text fontWeight="bold">17. Amendments</Text>
        <Text>
          17.1. FS reserves the right to amend these terms and conditions, changes will be published on FS's website: https://www.fairshares.com/nl/algemene-voorwaarden/.<br />
          17.2. Amendments to these terms and conditions are only effective after they have been published in an appropriate manner, it being understood that in the event of applicable changes during the term of an offer, the provision most favorable to the consumer will prevail.
        </Text>
      </VStack>
      <Button
        as={RouterLink}
        to="/"
        bg="brand.blue"
        color="white"
        size="md"
        mt={10}
        _hover={{
          bg: 'brand.blue',
          transform: 'scale(1.05)',
          boxShadow: '0 4px 16px rgba(0, 188, 212, 0.15)',
          border: 'none',
          borderColor: 'transparent',
          outline: 'none',
          color: 'white',
        }}
        _focus={{
          border: 'none',
          borderColor: 'transparent',
          outline: 'none',
          boxShadow: 'none',
        }}
        transition="all 0.2s"
      >
        Back to Home
      </Button>
    </Container>
  </Box>
);

export default Terms; 
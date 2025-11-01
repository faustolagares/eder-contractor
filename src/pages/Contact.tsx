import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "./contact.css";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const serviceOptions = [
  'interiorPainting',
  'exteriorPainting',
  'wallpaperInstallation',
  'deckOrFenceRenovation',
  'kitchenRemodeling',
  'bathroomRemodeling',
  'flooringInstallation',
  'cabinetInstallation',
  'resurfacing',
  'other',
] as const;

const US_STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'] as const;

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Form schema
  const formSchema = z.object({
    firstName: z.string().min(1, t('contact.form.validation.required')),
    lastName: z.string().min(1, t('contact.form.validation.required')),
    phoneNumber: z.string().min(1, t('contact.form.validation.required')).refine((val) => val && val.length >= 10, {
      message: t('contact.form.validation.invalidPhone'),
    }),
    emailAddress: z.string().optional().refine((val) => !val || z.string().email().safeParse(val).success, {
      message: t('contact.form.validation.invalidEmail'),
    }),
    projectType: z.string().min(1, t('contact.form.validation.required')),
    typeOfService: z.array(z.string()).min(1, t('contact.form.validation.required')),
    projectAddress: z.string().min(1, t('contact.form.validation.required')),
    projectCity: z.string().min(1, t('contact.form.validation.required')),
    projectState: z.string().min(1, t('contact.form.validation.required')),
    projectZipCode: z.string().min(1, t('contact.form.validation.required')),
    preferredStartDate: z.string().optional(),
    preferredContactMethod: z.string().optional(),
    projectDetails: z.string().optional(),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeOfService: [],
    },
  });

  const watchedProjectType = watch('projectType');
  const watchedPreferredStartDate = watch('preferredStartDate');
  const watchedPreferredContactMethod = watch('preferredContactMethod');
  const watchedProjectState = watch('projectState');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceToggle = (service: string) => {
    const newServices = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    setSelectedServices(newServices);
    setValue('typeOfService', newServices);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('phoneNumber', data.phoneNumber);
      if (data.emailAddress) formData.append('emailAddress', data.emailAddress);
      formData.append('projectType', data.projectType);
      // Send services as JSON string (FormData doesn't handle arrays well)
      formData.append('typeOfService', JSON.stringify(data.typeOfService));
      formData.append('projectAddress', data.projectAddress);
      formData.append('projectCity', data.projectCity);
      formData.append('projectState', data.projectState);
      formData.append('projectZipCode', data.projectZipCode);
      if (data.preferredStartDate) formData.append('preferredStartDate', data.preferredStartDate);
      if (data.preferredContactMethod) formData.append('preferredContactMethod', data.preferredContactMethod);
      if (data.projectDetails) formData.append('projectDetails', data.projectDetails);
      
      // Append multiple photos
      selectedPhotos.forEach((photo) => {
        formData.append('photos', photo);
      });

      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to send email');
      }

      setSubmitStatus('success');
      // Reset form
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedPhotos(filesArray);
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Banner Section */}
      <section
        style={{
          backgroundPosition: "50% 50%",
          backgroundImage:
            "url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475edadca9bd5720955f13b_Inner%20Banner%20Bg.png')",
        }}
        className="bg-no-repeat bg-cover relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32"
        id="contact-hero-section"
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="items-center flex-col h-auto justify-center text-center w-full flex">
            <div className="h-auto w-full max-w-xs pt-[60px] md:pt-0">
              <h2 className="text-white text-[2.75rem] lg:text-[2.63rem] font-bold h-auto leading-tight w-full">
                {t('contact.hero.title')}
              </h2>
              <div
                className="items-center gap-x-[0.38rem] h-auto justify-center mt-4 w-full flex"
                id="contact-hero-breadcrumb"
              >
                <img
                  src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475ef1ffbe005ec6bba0fab_Home%20Icon.svg"
                  className="h-5 mb-1 max-w-full align-middle w-4 inline-block"
                  alt="Home"
                />
                <Link to="/" className="text-white cursor-pointer font-semibold">
                  {t('contact.hero.breadcrumb.home')}
                </Link>
                <div className="text-white font-semibold">/</div>
                <Link
                  to="/contact"
                  className="text-orange-600 cursor-pointer font-semibold"
                >
                  {t('contact.hero.breadcrumb.current')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475f5227c58655d7dddb7c2_Inner%20Banner%20Shape%231.png"
          className="hidden lg:block bottom-[0.13rem] h-96 max-w-full absolute right-[100.75rem] align-middle w-80"
          id="contact-hero-img-1"
          alt="Shape 1"
        />
        <img
          src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475f5227df5050e2e513829_Inner%20Banner%20Shape%232.png"
          className="hidden lg:block h-72 left-[3.75rem] max-w-full absolute right-[98.00rem] top-[9.88rem] align-middle w-72 z-[1]"
          id="contact-hero-img-2"
          alt="Shape 2"
        />
      </section>

      {/* Contact Form Section */}
      <section
        style={{
          backgroundPosition: "50% 50%",
          backgroundImage:
            "url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64786bbfa27d0324116c7d29_Contact%20Us%20BG.png')",
        }}
        className="bg-no-repeat bg-cover relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        id="contact-form-section"
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div
            className="items-start h-auto justify-between w-full flex flex-col lg:flex-row gap-8 lg:gap-12 m-auto"
            id="contact-content-wrapper"
          >
            {/* Left Content */}
            <div className="h-auto w-full lg:w-[55%] max-w-2xl" id="contact-left-content">
              <div className="h-auto w-full">
                <h2
                  className="text-neutral-900 text-[2.75rem] lg:text-5xl xl:text-[4.75rem] font-bold h-auto leading-tight mb-6 w-full"
                  id="contact-title"
                >
                  {t('contact.form.title')}
                </h2>
                <p
                  className="h-auto leading-7 mb-9 w-full"
                  id="contact-description"
                >
                  {t('contact.form.description')}
                </p>
              </div>
              <div className="h-auto w-full" id="contact-info-list">
                <div className="flex-col h-auto gap-y-5 w-full flex">
                  <div className="items-center gap-x-5 h-auto w-full flex">
                    <div
                      className="items-center bg-orange-600 h-10 justify-center w-10 flex flex-shrink-0"
                      id="contact-icon-1"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64749958de4c4689b3a4679c_Contact%20Gmail%20Icon.svg"
                        className="h-6 max-w-full align-middle w-6 inline-block"
                        alt="Email"
                      />
                    </div>
                    <div className="h-auto flex-1">
                      <div className="text-lg lg:text-[1.75rem] font-medium h-auto leading-relaxed">
                        {t('contact.form.info.email')}
                      </div>
                    </div>
                  </div>
                  <div className="items-center gap-x-5 h-auto w-full flex">
                    <div
                      className="items-center bg-orange-600 h-10 justify-center w-10 flex flex-shrink-0"
                      id="contact-icon-2"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/647869d8faeae0708e3b43f3_Contact%20Icon2.svg"
                        className="h-7 max-w-full align-middle w-7 inline-block"
                        alt="Phone"
                      />
                    </div>
                    <div className="h-auto flex-1">
                      <div className="text-lg lg:text-[1.75rem] font-medium h-auto leading-relaxed">
                        {t('contact.form.info.phone')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="h-auto relative w-full lg:w-[46%] z-10" id="contact-right-form">
              <div
                className="h-auto py-9 px-6 lg:px-12 relative w-full bg-white z-20"
                id="contact-form-card"
              >
                <div className="h-auto mb-10 lg:mb-14 text-center w-full">
                  <h3
                    className="text-2xl lg:text-[1.63rem] font-bold h-auto leading-tight mb-3.5 w-full"
                    id="contact-form-title"
                  >
                    {t('contact.form.formTitle')}
                  </h3>
                  <div className="bg-orange-600 h-0.5 w-28 m-auto"></div>
                </div>

                {/* Status Messages - Loading and Success only at top */}
                {isSubmitting && (
                  <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-md">
                    <p className="text-orange-800 text-sm">{t('contact.form.messages.sending')}</p>
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 font-semibold text-sm mb-1">{t('contact.form.messages.success')}</p>
                    <p className="text-green-700 text-sm">{t('contact.form.messages.successDetail')}</p>
                  </div>
                )}

                <div className="h-auto w-full">
                  <form onSubmit={handleSubmit(onSubmit)} className="flex-col h-auto gap-y-6 w-full flex">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="h-auto w-full">
                        <Label htmlFor="firstName" className="font-semibold block mb-3 w-full">
                          {t('contact.form.fields.firstName.label')} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder={t('contact.form.fields.firstName.placeholder')}
                          className="cursor-text font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                          {...register('firstName')}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="h-auto w-full">
                        <Label htmlFor="lastName" className="font-semibold block mb-3 w-full">
                          {t('contact.form.fields.lastName.label')} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder={t('contact.form.fields.lastName.placeholder')}
                          className="cursor-text font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                          {...register('lastName')}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone Number with react-phone-input-2 */}
                    <div className="h-auto w-full">
                      <Label htmlFor="phoneNumber" className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.phoneNumber.label')} <span className="text-red-500">*</span>
                      </Label>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{ required: t('contact.form.validation.required') }}
                        render={({ field }) => (
                          <div className="w-full">
                            <PhoneInput
                              country={'us'}
                              value={field.value || ''}
                              onChange={(value) => field.onChange(value)}
                              inputClass="!w-full !h-14 !px-5 !text-base !font-medium !cursor-text !border-2 !border-black/[0.15] !border-solid !rounded-none"
                              buttonClass="!bg-transparent !border-0 !rounded-none"
                              containerClass="!w-full"
                              disableDropdown={true}
                              onlyCountries={['us']}
                              placeholder={t('contact.form.fields.phoneNumber.placeholder')}
                            />
                          </div>
                        )}
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="h-auto w-full">
                      <Label htmlFor="emailAddress" className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.emailAddress.label')}
                      </Label>
                      <Input
                        id="emailAddress"
                        type="email"
                        placeholder={t('contact.form.fields.emailAddress.placeholder')}
                        className="cursor-text font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                        {...register('emailAddress')}
                      />
                      {errors.emailAddress && (
                        <p className="text-red-500 text-sm mt-1">{errors.emailAddress.message}</p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div className="h-auto w-full">
                      <Label className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.projectType.label')} <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        value={watchedProjectType}
                        onValueChange={(value) => setValue('projectType', value)}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="residential" id="residential" />
                          <Label htmlFor="residential" className="cursor-pointer">{t('contact.form.projectTypeOptions.residential')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="commercial" id="commercial" />
                          <Label htmlFor="commercial" className="cursor-pointer">{t('contact.form.projectTypeOptions.commercial')}</Label>
                        </div>
                      </RadioGroup>
                      {errors.projectType && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                      )}
                    </div>

                    {/* Type of Service - Checkboxes without border */}
                    <div className="h-auto w-full">
                      <Label className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.typeOfService.label')} <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex flex-col gap-3">
                        {serviceOptions.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={() => handleServiceToggle(service)}
                            />
                            <Label htmlFor={service} className="cursor-pointer font-normal">
                              {t(`contact.form.serviceOptions.${service}`)}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {errors.typeOfService && (
                        <p className="text-red-500 text-sm mt-1">{errors.typeOfService.message}</p>
                      )}
                    </div>

                    {/* Project Address */}
                    <div className="h-auto w-full">
                      <Label htmlFor="projectAddress" className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.projectAddress.label')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="projectAddress"
                        type="text"
                        placeholder={t('contact.form.fields.projectAddress.placeholder')}
                        className="cursor-text font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                        {...register('projectAddress')}
                      />
                      {errors.projectAddress && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectAddress.message}</p>
                      )}
                    </div>

                    {/* Project City and State */}
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="h-auto w-full">
                        <Label htmlFor="projectCity" className="font-semibold block mb-3 w-full">
                          {t('contact.form.fields.projectCity.label')} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="projectCity"
                          type="text"
                          placeholder={t('contact.form.fields.projectCity.placeholder')}
                          className="cursor-text font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                          {...register('projectCity')}
                        />
                        {errors.projectCity && (
                          <p className="text-red-500 text-sm mt-1">{errors.projectCity.message}</p>
                        )}
                      </div>
                      <div className="h-auto w-full">
                        <Label htmlFor="projectState" className="font-semibold block mb-3 w-full">
                          {t('contact.form.fields.projectState.label')} <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={watchedProjectState}
                          onValueChange={(value) => setValue('projectState', value)}
                        >
                          <SelectTrigger className="h-14 border-2 border-black/[0.15]">
                            <SelectValue placeholder={t('contact.form.fields.projectState.placeholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            {US_STATES.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state} - {t(`contact.form.usStates.${state}`)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.projectState && (
                          <p className="text-red-500 text-sm mt-1">{errors.projectState.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Zip Code */}
                    <div className="h-auto w-full">
                      <Label htmlFor="projectZipCode" className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.projectZipCode.label')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="projectZipCode"
                        type="text"
                        placeholder={t('contact.form.fields.projectZipCode.placeholder')}
                        className="cursor-text font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                        {...register('projectZipCode')}
                      />
                      {errors.projectZipCode && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectZipCode.message}</p>
                      )}
                    </div>

                    {/* Preferred Start Date - Radio Buttons */}
                    <div className="h-auto w-full">
                      <Label className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.preferredStartDate.label')}
                      </Label>
                      <RadioGroup
                        value={watchedPreferredStartDate}
                        onValueChange={(value) => setValue('preferredStartDate', value)}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="asap" id="asap" />
                          <Label htmlFor="asap" className="cursor-pointer">{t('contact.form.startDateOptions.asap')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="twoWeeks" id="twoWeeks" />
                          <Label htmlFor="twoWeeks" className="cursor-pointer">{t('contact.form.startDateOptions.twoWeeks')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="oneMonth" id="oneMonth" />
                          <Label htmlFor="oneMonth" className="cursor-pointer">{t('contact.form.startDateOptions.oneMonth')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="flexible" id="flexible" />
                          <Label htmlFor="flexible" className="cursor-pointer">{t('contact.form.startDateOptions.flexible')}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="h-auto w-full">
                      <Label className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.preferredContactMethod.label')}
                      </Label>
                      <RadioGroup
                        value={watchedPreferredContactMethod}
                        onValueChange={(value) => setValue('preferredContactMethod', value)}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="call" id="call" />
                          <Label htmlFor="call" className="cursor-pointer">{t('contact.form.contactMethodOptions.call')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="text" id="text" />
                          <Label htmlFor="text" className="cursor-pointer">{t('contact.form.contactMethodOptions.text')}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Upload Multiple Photos */}
                    <div className="h-auto w-full">
                      <Label htmlFor="photos" className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.uploadPhoto.label')}
                      </Label>
                      <Input
                        id="photos"
                        type="file"
                        accept="image/*"
                        multiple
                        className="cursor-pointer font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                        onChange={handlePhotoChange}
                      />
                      {selectedPhotos.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {selectedPhotos.map((photo, index) => (
                            <p key={index} className="text-sm text-gray-600">{photo.name}</p>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-1">{t('contact.form.fields.uploadPhoto.description')}</p>
                    </div>

                    {/* Project Details - Optional */}
                    <div className="h-auto w-full">
                      <Label htmlFor="projectDetails" className="font-semibold block mb-3 w-full">
                        {t('contact.form.fields.projectDetails.label')}
                      </Label>
                      <Textarea
                        id="projectDetails"
                        placeholder={t('contact.form.fields.projectDetails.placeholder')}
                        className="text-zinc-800 cursor-text font-medium leading-6 min-h-[8.50rem] w-full py-3 px-5 resize-y border-2 border-black/[0.15] border-solid"
                        {...register('projectDetails')}
                      />
                      {errors.projectDetails && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectDetails.message}</p>
                      )}
                    </div>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500">{t('contact.form.messages.privacy')}</p>

                    {/* Submit Button */}
                    <div className="h-auto w-full">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-orange-600 text-white cursor-pointer font-semibold h-14 py-5 px-9 text-center select-none w-full lg:w-full hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? t('contact.form.messages.sending') : t('contact.form.submit')}
                      </Button>
                    </div>

                    {/* Error Message - Below button */}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-800 text-sm">{t('contact.form.messages.error')}</p>
                      </div>
                    )}
                  </form>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6474deecd4fa1e5c0c6dcfbb_Contact%20Us%20Card%20Border.png"
                  className="hidden lg:block bottom-[33.13rem] h-0.5 left-[15.00rem] max-w-full absolute right-[-11.63rem] top-[6.63rem] align-middle w-96 z-10"
                  id="contact-form-border-img"
                  alt="Border"
                />
              </div>
              <img
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64786f47502020857ffc5406_Contact%20Us%20Form%20Shape.png"
                className="hidden lg:block bottom-[18.25rem] h-80 left-[0.38rem] max-w-full absolute right-[11.50rem] top-[0.50rem] align-middle w-72 z-0"
                id="contact-form-img-1"
                alt="Shape"
              />
              <img
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64786f47ef6a326edc12fe4c_Contact%20Us%20Form%20Shape2.png"
                className="hidden lg:block bottom-[3.88rem] h-[39.13rem] max-w-full absolute right-[11.63rem] top-[-3.13rem] align-middle w-72 z-0"
                id="contact-form-img-2"
                alt="Shape 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
